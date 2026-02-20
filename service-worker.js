const CACHE_NAME = 'sleepguard-v1.0.0';
const ASSETS = [
  './drowsiness_detector_mobile.html',
  './manifest.json'
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ時にキャッシュファーストで返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあればそれを返す、なければネットワークから取得
        return response || fetch(event.request);
      })
      .catch(() => {
        // オフライン時のフォールバック
        console.log('Service Worker: Fetch failed, serving offline page');
      })
  );
});

// プッシュ通知（将来的に使用）
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'SleepGuard';
  const options = {
    body: data.body || '居眠りを検知しました',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
