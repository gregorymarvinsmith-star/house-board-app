// House Board app notifications. The board's server sends an encrypted push when someone writes in the House chat;
// this shows it, and a tap opens the House Board app. Nothing is stored here.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : '' }; }
  // An iPhone turns off alerts for an app that gets a push without showing one, so always show something
  e.waitUntil(self.registration.showNotification(d.title || 'House Board', {
    body: d.body || 'New message in the House chat', icon: 'icons/icon-192.png', tag: 'house-chat',
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    const open = list.find(c => 'focus' in c);
    return open ? open.focus() : self.clients.openWindow('./');
  }));
});
