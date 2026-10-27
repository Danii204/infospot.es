// The service worker of the website's test build at /beta/ (src/offline.ts registers it only there):
// the website keeps working without coverage. Its own files and data come from the network and, when
// the network fails or takes too long, from the "shell" cache; map tiles come from the "tiles" cache
// (a reservoir saved from its card) and otherwise from the network.
const SHELL = "shell";
const TILES = "tiles";
const WAIT_MS = 4000;
const TILE_HOSTS = ["www.ign.es", "cartografia.dgterritorio.gov.pt", "tiles.maps.eox.at"];

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

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
  const cache = await caches.open(SHELL);
  // A page opened at any #route is the same file.
  const key = req.mode === "navigate" ? new URL(req.url).origin + new URL(req.url).pathname : req;
  const net = fetch(req).then((res) => {
    if (res.ok) cache.put(key, res.clone());
    return res;
  });
  const slow = new Promise((resolve) => setTimeout(resolve, WAIT_MS));
  const hit = await Promise.race([net.catch(() => undefined), slow]).then((res) => res ?? cache.match(key, { ignoreVary: true, ignoreSearch: req.mode === "navigate" }));
  return hit ?? net;
}
