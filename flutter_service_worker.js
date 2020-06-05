'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "127b2ee24b4a4b5993bccb21fa0e7ccd",
"/": "127b2ee24b4a4b5993bccb21fa0e7ccd",
"main.dart.js": "efb534109803a10ea7fb35227bb3c7c7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "277ae3ad95f2ad6d4c10aedc24f3947e",
"assets/LICENSE": "19bfef4ab4c9a0c0d4702311b3361888",
"assets/AssetManifest.json": "82e2db65e484366186226e16ff3106df",
"assets/FontManifest.json": "2278b4b9ec66c0bbe012518ba619d299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/twitter.png": "cf7740bd36d7072e325c10706c9f8f45",
"assets/assets/images/linkedin.png": "1a9291b12d642cb2fa8aa8fbef5c7be1",
"assets/assets/fonts/Caveat-Bold.ttf": "3001cff3181eefd8db327cd724309a09",
"assets/assets/fonts/Caveat-Regular.ttf": "b20ff458bc0dc48c039c68a3dc96173c",
"assets/assets/code1.flr": "3ec5cd241c72ef914a76be34056fa23e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
