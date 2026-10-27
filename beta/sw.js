// The former test build's service worker, replacing the one browsers kept at /beta/: it removes
// itself, so /beta/ reaches the network and its redirect to /app/. The downloaded maps stay: /app/
// uses the same "tiles" cache.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.registration.unregister()));
