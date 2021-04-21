var cacheName = 'vlive-v4';
var filesToCache = [
  '/',
  '/index.html',
  'favicon.ico'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => {
          return name !== cacheName;
        }).map((name) => {
          return caches.delete(name);
        })
      )
    })
  )
});

self.addEventListener('fetch', (e) => {
  if (e.request.method === 'GET') {
    let urlObject = new URL(e.request.url);
    let urlPath = urlObject.pathname;
    console.log("urlPath", urlPath)
    if(urlPath.startsWith('/accounts') == false && urlPath.startsWith('/player') == false) {
      let request_format = e.request.url.split('.').pop();
      if (request_format != 'mp3' && request_format != 'mpd' && request_format != 'mp4') {

        // start
        e.respondWith(
          caches.open(cacheName).then(function(cache) {
            return cache.match(e.request).then(function(response) {
              var fetchPromise = fetch(e.request).then(function(networkResponse) {
                if (networkResponse.status == 200 || networkResponse.status == 201) {
                  cache.put(e.request, networkResponse.clone());
                }
                return networkResponse;
              }).catch((error) => {
              })
              return response || fetchPromise;
            });
          })
        );

          // end

      }
  }
  }
});
