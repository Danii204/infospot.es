// The website's service worker (registered by src/offline.ts): the website keeps working without
// coverage. Its own files and data come from the network and, when the network fails or takes too
// long, from the caches: this build's files in "shell<base><build>" (/app/ and the test build at /beta/
// apart), pages, data and the weather in
// "data" (kept from build to build, so the last forecast survives an update); map tiles come from the "tiles" cache (the pieces
// downloaded from Layers or a reservoir's page) and otherwise from the network.
const SHELL_OF_BASE = `shell${new URL(self.registration.scope).pathname}`;
const SHELL = SHELL_OF_BASE + (new URL(location.href).searchParams.get("v") ?? "0");
const TILES = "tiles";
const DATA = "data";
const WAIT_MS = 4000;
const TILE_HOSTS = ["www.ign.es", "cartografia.dgterritorio.gov.pt", "tiles.maps.eox.at"];
// InfoSpot's copy of the DGT's photos in the R2 bucket (its depth tiles are not downloaded).
const COPY = { host: "mapas.infospot.es", path: "/ortho/" };
// Beyond the copy (1 km around the water) the bucket answers 404, and 403 while the spending guard
// blocks it (worker/src/guard.ts): from zoom 14, the first the DGT draws, the DGT's own tile instead,
// as the app (OrthoFallback). Photo id to WMS service and layer.
const DGT_MIN_ZOOM = 14;
const DGT_PHOTOS = {
  pt1995: ["ortos1995", "Ortos1995-FalsaCor"], pt2005: ["ortos2004-2006", "Ortos2004-2006-RGB"],
  pt2007: ["ortos2007", "Ortos2007-RGB"], pt2010: ["ortos2010", "Ortos2010-RGB"], pt2012: ["ortos2012", "Ortos2012-RGB"],
  pt2015: ["ortos2015", "Ortos2015-RGB"], pt2018: ["ortos2018", "Ortos2018-RGB"], pt2021: ["ortos2021", "Ortos2021-RGB"],
  pt2025: ["ortos2025", "Ortos2025-RGB"],
};

async function copyTile(req, url) {
  const res = await fetch(req);
  const m = url.pathname.match(/^\/ortho\/(pt\d{4})\/(\d+)\/(\d+)\/(\d+)\.webp$/);
  if ((res.status !== 404 && res.status !== 403) || !m || !DGT_PHOTOS[m[1]] || Number(m[2]) < DGT_MIN_ZOOM) return res;
  const [service, layer] = DGT_PHOTOS[m[1]];
  const [z, x, y] = m.slice(2).map(Number);
  const half = 20037508.342789244, size = (2 * half) / 2 ** z;
  const bbox = [-half + x * size, half - (y + 1) * size, -half + (x + 1) * size, half - y * size].join(",");
  return fetch(`https://cartografia.dgterritorio.gov.pt/wms/${service}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=${layer}` +
    `&STYLES=&CRS=EPSG:3857&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE&BBOX=${bbox}`);
}

self.addEventListener("install", () => self.skipWaiting());
// Earlier builds' copies of this base go, and the ones named before the bases had their own: their
// hashed files are never asked again.
self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys().then((keys) => Promise.all(keys.filter((k) => (k.startsWith(SHELL_OF_BASE) || k.startsWith("shell-")) && k !== SHELL).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()),
));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (TILE_HOSTS.includes(url.hostname) || (url.hostname === COPY.host && url.pathname.startsWith(COPY.path))) {
    e.respondWith(caches.open(TILES).then((c) => c.match(req, { ignoreVary: true })).then((hit) => hit ?? (url.hostname === COPY.host ? copyTile(req, url) : fetch(req))));
  } else if (url.origin === location.origin || url.hostname === "api.open-meteo.com") {
    // Hashed file names never change: the cache first. Pages and data: the network first.
    e.respondWith(url.pathname.includes("/assets/") ? cacheFirst(req) : networkFirst(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(SHELL);
  const hit = await cache.match(req, { ignoreVary: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
}

async function networkFirst(req) {
  const cache = await caches.open(DATA);
  // A page opened at any #route is the same file.
  const key = req.mode === "navigate" ? new URL(req.url).origin + new URL(req.url).pathname : req;
  const net = fetch(req).then((res) => {
    if (res.ok) cache.put(key, res.clone());
    return res;
  });
  const slow = new Promise((resolve) => setTimeout(resolve, WAIT_MS));
  // Any cache: the page also keeps what it loaded before this worker ran (src/offline.ts).
  const hit = await Promise.race([net.catch(() => undefined), slow]).then((res) => res ?? caches.match(key, { ignoreVary: true, ignoreSearch: req.mode === "navigate" }));
  return hit ?? net;
}
