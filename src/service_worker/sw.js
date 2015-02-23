/* global self, importScripts, URL, caches, fetch, registration, clients, location */

importScripts('serviceworker-cache-polyfill.js');

var staticCacheName = 'cache-static-v1';
var imgCacheName = 'cache-img-v1';
var apiCacheName = 'cache-api-v1';
var staticFiles = [
  '/',
  '/app/index.css',
  '/app/boot.js',
  '/vendor.js',
  '/template_cache.js',
  '/assets/images/logo.png',
  '/font/material-design-icons/Material-Design-Icons.woff',
  '/font/roboto/Roboto-Regular.ttf',
  '/font/roboto/Roboto-Thin.ttf',
  '/font/roboto/Roboto-Light.ttf',
  '/offline.gif'
];

self.addEventListener('install', function(event) {
    console.log('Installing', event);
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(staticFiles);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('activate', event);
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return [staticCacheName, imgCacheName, apiCacheName].indexOf(cacheName) < 0;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestURL = new URL(event.request.url);
    var response;

    if (requestURL.hostname === 'img.episodehunter.tv') {
        console.log('Trying to fetch images from EH eh?');
        response = ehRespose(event.request, imgCacheName);
    } else if(requestURL.pathname === '/user/upcoming') {
        console.log('Fetching API');
        response = ehRespose(event.request, apiCacheName);
    } else if (location.hostname === requestURL.hostname) {

    } else {
        console.log('Checking cache', event.request.url);
        response = caches.match(event.request)
            .then(function(cacheMatch) {
                if (cacheMatch) {
                    console.log('Found cache', event.request.url);
                    return cacheMatch;
                }
                return Promise.reject('Can not find requested item in cache :(');
            })
            .catch(function() {
                return fetch(event.request);
            })
            .catch(function() {
                if (/\.(png|jpg|jpeg|gif)$/.test(requestURL.pathname)) {
                    console.log('offline.gif', event.request.url);
                    return caches.match('/offline.gif');
                }
                console.error('Nothing we can do about', event.request.url);
                return Promise.reject('Can not fetch requested item :(');
            });

        // response = fetch(event.request)
        //     .catch(function() {
        //         console.log('No internet, checking cache', event.request.url);
        //         return caches.match(event.request);
        //     }).then(function(response) {
        //         if (response) {
        //             console.log('Found cache', event.request.url);
        //             return response;
        //         }
        //         if (/\.(png|jpg|jpeg|gif)$/.test(requestURL.pathname)) {
        //             console.log('offline.gif', event.request.url);
        //             return caches.match('/offline.gif');
        //         }
        //         console.log('nothing we can do', event.request.url);
        //         return Promise.reject('Can not fetch requested item :(');
        //     });
    }

    return event.respondWith(response);
});

self.addEventListener('push', function(event) {
    console.log('Push Event Received', event);

    registration.showNotification('Episodehunter', {
        body: 'Next episode of Braking Bad will be airing in 15 minutes',
        icon: '/assets/images/logo.png',
        tag: 'new-episode'
    });
});

self.addEventListener('notificationclick', function(event) {
    console.log('Clicking on notification', event);
    clients.openWindow('/#/mb');
    // clients.matchAll().then(function(allClients) {
    //     return allClients.filter(function(c) {
    //         return (new URL(c.url).pathname === '/');
    //     })[0];
    // }).then(function(client) {
    //     if (client) {
    //         client.focus();
    //     } else {
    //       clients.openWindow('#/mb');
    //     }
    // });
});

function ehRespose(request, cacheName) {
    return caches
        .match(request)
        .then(function(response) {
            if (response) {
                return response;
            }

            return fetch(request.clone())
                .then(function(response) {
                    caches
                        .open(cacheName)
                        .then(function(cache) {
                            cache.put(request, response)
                                .then(function() {
                                    console.log('yey img cache');
                                }, function() {
                                    console.log('nay img cache');
                                });
                        });

                    return response.clone();
                });
        });
}
