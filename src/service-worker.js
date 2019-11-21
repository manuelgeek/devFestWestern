/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({
    prefix: 'devWest',
    precache: 'precache',
    runtime: 'runtime',
});
// ? this clears the cache everytime you change the version

//Change this value every time before you build
const LATEST_VERSION = 'v1.0.4'
// eslint-disable-next-line no-unused-vars
self.addEventListener('activate', (_event) => {
    console.log(`%c ${LATEST_VERSION} `, 'background: #ddd; color: #0000ff')
    if (caches) {
        caches.keys().then((arr) => {
            arr.forEach((key) => {
                if (key.indexOf('devWest-precache') < -1) {
                    caches.delete(key).then(() => console.log(`%c Cleared ${key}`, 'background: #333; color: #ff0000'))
                } else {
                    caches.open(key).then((cache) => {
                        cache.match('version').then((res) => {
                            if (!res) {
                                cache.put('version', new Response(LATEST_VERSION, { status: 200, statusText: LATEST_VERSION }))
                            } else if (res.statusText !== LATEST_VERSION) {
                                caches.delete(key).then(() => console.log(`%c Cleared Cache ${LATEST_VERSION}`, 'background: #333; color: #ff0000'))
                            } else console.log(`%c Great you have the latest version ${LATEST_VERSION}`, 'background: #333; color: #00ff00')
                        })
                    })
                }
            })
        })
    }
});
workbox.skipWaiting();
workbox.clientsClaim();

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'devWest-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'devWest-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);
// 3. cache firebase storage images
workbox.routing.registerRoute(
    new RegExp('https://firebasestorage.googleapis.com/'),
    workbox.strategies.cacheFirst({
        cacheName: 'devWest-cache-firebaseStorage-data',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest,'/no-internet', {});
workbox.routing.registerNavigationRoute('/index.html',{
    blacklist: [/^\/__\/*/],
});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg=>{
    if (msg.data.action=='skipWaiting'){
        self.skipWaiting()
    }
});

