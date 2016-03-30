//Bron: http://www.html5rocks.com/en/tutorials/service-worker/introduction/


console.log('im alive');

// install
// welke events wil ik cashen (url's)
// var urlsToCache = [
//         './',
//         '/styles/style.css',
//         '/js/app.js',
//         '/images/logo.png',
//         'images/header_1024.jpg'
// ];


// this.addEventListener('install', function(event){
// 	event.waitUntil(
// 		cashes.open('look-live-v1') // cashe name aangemaakt en in die case name word met .open alle arrays of files geplaatst
// 		.then(function(cache) {
// 	    console.log('opend cache');
// 	    return cache.addAll(urlsToCache);
// 		})
// 	);
// });


this.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('looklive-v1').then(function(cache) {
      return cache.addAll([
        './',
        '/styles/style.css',
        '/js/app.js',
        '/images/logo.png',
        'images/header_1024.jpg'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
