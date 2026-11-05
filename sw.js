// Anatomix 3D offline service worker (web version only; written to dist/sw.js by vite.config.ts).
// - The app shell (page, code, decoder, icons, catalog, skeleton) is stored on install, per build.
// - Everything else (other systems' models, data, descriptions) is stored the first time it is
//   used, or all at once with Settings → "Download everything for offline use".
// - Stored data is served instantly and refreshed in the background when online.
const VERSION = "mw3vv6ra";
const SHELL = ["assets/index-D1ukp6_N.js","assets/index-L_0KIjlw.css","data/catalog.json","data/i18n/languages.json","data/i18n/names-la.json","data/i18n/ta2.json","data/region-presets.json","draco/draco_decoder.js","draco/draco_decoder.wasm","draco/draco_wasm_wrapper.js","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","index.html","manifest.webmanifest","models/skeletal.glb"];
const SHELL_CACHE = `anatomix-shell-${VERSION}`;
const DATA_CACHE = "anatomix-data-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("anatomix-shell-") && k !== SHELL_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Wikipedia/Wikidata links etc. go to the network

  // The page itself: network first (to pick up updates), stored copy when offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put("index.html", copy));
          return res;
        })
        .catch(() => caches.match("index.html", { cacheName: SHELL_CACHE })),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const key = new Request(url.origin + url.pathname); // ignore ?query and request cache modes
      const hit = (await caches.match(key, { cacheName: SHELL_CACHE })) ?? (await caches.match(key, { cacheName: DATA_CACHE }));
      const refresh = fetch(key)
        .then(async (res) => {
          if (res.ok && !(await caches.match(key, { cacheName: SHELL_CACHE }))) (await caches.open(DATA_CACHE)).put(key, res.clone());
          return res;
        })
        .catch(() => null);
      if (hit) {
        event.waitUntil(refresh); // stale-while-revalidate
        return hit;
      }
      return (await refresh) ?? new Response("Offline and not downloaded yet", { status: 503 });
    })(),
  );
});
