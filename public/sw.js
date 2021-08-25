if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script");
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, a, i) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case "exports":
                return n;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define("./sw.js", ["./workbox-21b21c9a"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/framework-b97a0ed4f13ff8397343.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/chunks/main-22b796e30612c6cb72c4.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/chunks/pages/_app-c93671b837d4b2a61934.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/chunks/pages/index-3adb4442d9a1ba8a636c.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/chunks/webpack-ddd010a953737b6e3536.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/css/120f2e2270820d49a21f.css",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/css/eb291d7de33c874d5a88.css",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/w3vaXNB-VYTGmFKlRKAtT/_buildManifest.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        {
          url: "/_next/static/w3vaXNB-VYTGmFKlRKAtT/_ssgManifest.js",
          revision: "w3vaXNB-VYTGmFKlRKAtT",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/icons/_head.html",
          revision: "e2042127d5364b9181a6aac1b591085f",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "f7eddf524319d0e929b706bdbb3510bc",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "772b4af9e2b86635be1383362ece8875",
        },
        {
          url: "/icons/icon-36x36.png",
          revision: "7f93b80b459dcfd1e9ec20501ed05527",
        },
        {
          url: "/icons/icon-48x48.png",
          revision: "1ba7973fb24d442bccdb591e555a5bc8",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "a0fbd5780ebedd26d5a0ecad3aa984cc",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "c90ca3fbf6fbb2483dd457c15ff18bb8",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "16c5012f3a6a6ce0bf4a5de570cb7a0a",
        },
        {
          url: "/icons/maskable.png",
          revision: "c3c4201fe79e51e87518571e92e3b2db",
        },
        { url: "/manifest.json", revision: "49eaf92a1674c25bc462176ae8812942" },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
