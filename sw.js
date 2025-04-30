const CACHE_NAME = 'mayyal-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/assets/bg.webp',
  '/assets/logo.webp',
  '/assets/hawawshi.webp',
  '/assets/kofta.webp',
  '/assets/tawouk.webp',
  '/assets/ig_black.svg',
  '/assets/loc.webp',
  '/assets/eighties.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
}); 