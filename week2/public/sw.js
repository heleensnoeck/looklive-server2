console.log('im alive');

// this.addEventListener('install', function(event) {
// 	console.log('and  i installed');
// });

// install
// welke events wil ik cashen (url's)
var urlsToCache = [
	'/',
	'./styles/style.css',
	'./js/app.js'
	 '/images/logo.png',
     'images/header_1024.jpg'
];


this.addEventListener('install', function(event){
	event.waitUntil(
		cashes.open('look-live-v1') // cashe name aangemaakt en in die case name word met .open alle arrays of files geplaatst
		.then(function(cache) {
	    console.log('opend cache');
	    return cache.addAll(urlsToCache);
		})
	);
});


// this.addEventListener('fetch', function(event) {
// 	var requestURL = new URL(event.request.url);

// 	if(/\.statricflickr\.com$/.test(requestURL.hostname)) {
// 		event.respondWith(flickrImageResponse(event.request));
// 	} else {
// 		event.respondWith(
// 			caches.match(event.request).then(function(response) {
// 				return response || fetch (event.request);
// 			})
// 		);
// 	}
// });
