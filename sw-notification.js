// tslint:disable:no-console

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');

  const title = 'PWA POC';
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://toonpang.github.io/pwa/')
  );
});

