const CACHE_NAME = 'weywu-festival-v6'; // Change cache name for updates
const urlsToCache = [
  '/', // Important: cache root
  '/index.html',
  '/manifest.json',
  '/coat-of-arms.jpg',
  '/flag-weywu.jpg',
  '/anthem.mp3',
  '/apple-touch-icon.png'
];

console.log('Service Worker loading...');

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Failed to cache:', error);
      })
  );
  self.skipWaiting(); // Force the new service worker to activate
});

// Fetch event - serve from cache, handle navigation for offline
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests (important for iOS home screen launches)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() =>
          caches.match('/index.html').then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Try root path if index.html isn't found
            return caches.match('/').then((rootResponse) => {
              if (rootResponse) {
                return rootResponse;
              }
              // Fallback offline page
              return new Response(
                `<html><body><h1>Немає з'єднання з інтернетом</h1></body></html>`,
                { headers: { 'Content-Type': 'text/html' } }
              );
            });
          })
        )
    );
    return;
  }

  // All other requests: serve from cache if available, else fetch & cache
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('Serving from cache:', event.request.url);
        return response;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch((error) => {
          console.log('Network failed for:', event.request.url, error);
        });
    })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Push notifications (optional for future festival announcements)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Нові новини про фестиваль!',
      icon: '/coat-of-arms.jpg',
      badge: '/coat-of-arms.jpg',
      tag: 'festival-notification',
      renotify: true,
      requireInteraction: false,
      actions: [
        { action: 'open', title: 'Відкрити сайт' },
        { action: 'dismiss', title: 'Закрити' }
      ]
    };
    event.waitUntil(
      self.registration.showNotification(
        data.title || 'Республіка Вейву',
        options
      )
    );
  }
});

// Notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(clients.openWindow('/'));
  }
});
