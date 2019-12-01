var version = 19;
var name = "wpo::" + version;

console.log("SW version "+ version +" script run at", new Date());

self.addEventListener("install", function(event) {
    console.log("SW version " + version + " installed at", new Date());
    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    console.log("SW  version " + version + " activated at", new Date());
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.filter(function (cacheName) {
                return cacheName !== name;
            }).map(function (cacheName) {
                return caches.delete(cacheName);
            }));
        })
    );
});

self.addEventListener("fetch", function(event) {
    // open cache by name
    event.respondWith(caches.open(name).then(function(cache) {
        // does my cache have a value I need?
        return cache.match(event.request).then(function(cacheResponse) {

            // fetch response from a network/HTTP cache
            var fetchPromise = fetch(event.request).then(function(networkResponse) {
                // store response in a cache
                // close it first because otherwise it can be only used once
                // we may use it second time when we return it to event.respondWith
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });

            // return either cached value or a network response wrapped in a promise
            // Promise API handles values and values wrapped in Promises
            return cacheResponse || fetchPromise;
        });
    }));
});