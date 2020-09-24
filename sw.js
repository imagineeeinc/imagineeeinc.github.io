importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('imagineee').then(function(cache) {
     return cache.addAll([
       '',
       'index.html',
       'wood.html',
       'game.html',
       'style.css',
       'wood.css',
       'game.css',
       'app.js',
       'manifest.json',
       'icon/Github.png',
       'icon/open.png',
       'icon/so.png',
       'icon/user.png',
       'img/back.gif',
       'img/head_wall.png',
       'img/mt.jpg',
       'Favicon/favicon.ico',
       'Favicon/apple-touch-icon.png',
       'Favicon/maskable_icon.png',
       'Favicon/android-chrome-512x512.png',
       'https://github-readme-stats.vercel.app/api/top-langs/?username=imagineeeinc&hide=ruby'
     ]);
   })
 );
});

caches.open('imagineee').then(function(cache) {
     return cache.addAll([
       '',
       'index.html',
       'wood.html',
       'game.html',
       'style.css',
       'wood.css',
       'game.css',
       'app.js',
       'manifest.json',
       'icon/Github.png',
       'icon/open.png',
       'icon/so.png',
       'icon/user.png',
       'img/back.gif',
       'img/head_wall.png',
       'img/mt.jpg',
       'Favicon/favicon.ico',
       'Favicon/apple-touch-icon.png',
       'Favicon/maskable_icon.png',
       'Favicon/android-chrome-512x512.png',
       'https://github-readme-stats.vercel.app/api/top-langs/?username=imagineeeinc&hide=ruby'
     ]);
   })

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
        );
    });
