const CACHE_VERSION = 'v1.00.03';
const CACHE_FILES = [
    '/',
    '/public/views/index.ejs',
    '/public/views/_header.ejs',
    '/public/views/_footer.ejs',
    '/public/css/styles.css',
    '/public/javascripts/main.js',
    '/public/images/favicon.ico',
    '/public/images/icon.192.png',
    '/public/images/icon.512.png',
    'public/userInfo.csv'
];
const OFFLINE_URL = "offline.html";

self.addEventListener('install', (event) => {
    console.log('Installing service worker...')
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function(cache) {
                console.log('Opened cache');
                cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
                return cache.addAll(CACHE_FILES);
            }
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        if ("navigationPreload" in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());
    self.clients.claim();
    console.log(`SW activated:  ${event}`);
});

self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
        try {
            const cachedResponse = await caches.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }
            const response = await event.preloadResponse;
            if (response) {
                return await response;
            }
            return fetch(event.request);
        } catch(error) {
            console.log("Fetch failed; returning offline page instead.", error);
        }
    }());
});