// The website's service worker (registered by src/offline.ts): the website keeps working without
// coverage. Its own files and data come from the network and, when the network fails or takes too
// long, from the caches: this build's files in "shell-<build>", pages, data and the weather in
// "data" (kept from build to build, so the last forecast survives an update); map tiles come from the "tiles" cache (the pieces
// downloaded from Layers or a reservoir's page) and otherwise from the network.
const SHELL = `shell-${new URL(location.href).searchParams.get("v") ?? "0"}`;
const TILES = "tiles";
const DATA = "data";
const WAIT_MS = 4000;
const TILE_HOSTS = ["www.ign.es", "cartografia.dgterritorio.gov.pt", "tiles.maps.eox.at"];

self.addEventListener("install", () => self.skipWaiting());
// Earlier builds' copies of the website go: their hashed files are never asked again.
self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("shell") && k !== SHELL).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()),
));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (TILE_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(TILES).then((c) => c.match(req, { ignoreVary: true })).then((hit) => hit ?? fetch(req)));
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
