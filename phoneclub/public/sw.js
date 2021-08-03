if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const a = document.createElement('script');
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, t, i) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const r = { uri: location.origin + s.slice(1) };
        return Promise.all(
          t.map((s) => {
            switch (s) {
              case 'exports':
                return a;
              case 'module':
                return r;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define('./sw.js', ['./workbox-6f0d2936'], function (e) {
  'use strict';
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/', revision: 'u-lL-GXjHfSfAi-lumm1z' },
        {
          url:
            '/_next/static/chunks/50d5a324cfd9d6c9e86de944b24a9dfeae41555f.e041484abd89ef02ecfa.js',
          revision: '4950978a815a863227c4b62e6035d419',
        },
        {
          url: '/_next/static/chunks/cb05bb9e.37da1e6c94fa5227f4d3.js',
          revision: 'ab8a30273db0b805aedfc8f8566c52dd',
        },
        {
          url: '/_next/static/chunks/commons.7fcf7956e8f9fc6896b8.js',
          revision: '5d5813c1eaeeb17b18273cfc610d6346',
        },
        {
          url: '/_next/static/chunks/framework.98c1b221acb34aa9927b.js',
          revision: '0b711c3e02b0095b778e8d3a6cd216d2',
        },
        {
          url: '/_next/static/css/022bf4aabb0a7036177b.css',
          revision: '277c114cef176036bc966c72e2479fe7',
        },
        {
          url: '/_next/static/css/98d2ade3f220b3b083b7.css',
          revision: '5047e763709e21e58f83644d4ab53dee',
        },
        {
          url: '/_next/static/runtime/main-f77ea1824a0ed9c43616.js',
          revision: '9670a2f298a744b174227b6f25fc5368',
        },
        {
          url: '/_next/static/runtime/polyfills-04315457c2763349f86d.js',
          revision: '0070299e52d19138bf8540b95eda8a33',
        },
        {
          url: '/_next/static/runtime/webpack-91b117697e716c22a78b.js',
          revision: '40b4095b5b68a142c856f388ccb756f2',
        },
        {
          url: '/_next/static/u-lL-GXjHfSfAi-lumm1z/_buildManifest.js',
          revision: 'fb96ae7926f5104f50f0cf1b3a23a9b5',
        },
        {
          url: '/_next/static/u-lL-GXjHfSfAi-lumm1z/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url: '/_next/static/u-lL-GXjHfSfAi-lumm1z/pages/_app.js',
          revision: '28f60ed90978fb73b530dee05a15a03a',
        },
        {
          url: '/_next/static/u-lL-GXjHfSfAi-lumm1z/pages/_error.js',
          revision: 'b333326e31337e735712bf47bd1c5ce7',
        },
        {
          url: '/_next/static/u-lL-GXjHfSfAi-lumm1z/pages/index.js',
          revision: '49c8ceb70698c850af0c8cf2060ad5f8',
        },
        { url: '/favicon.ico', revision: '412192267449ea67eebabd3e62acfe51' },
        { url: '/zeit.svg', revision: '7b2022f3692adf56949c7019f7ebb670' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
      new e.CacheFirst({
        cacheName: 'font-awesome',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'others',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    );
});
