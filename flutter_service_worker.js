'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "c7d407d7d7f3bc8e17c671c8d6836714",
"version.json": "00f047fa82e1dc4c5b170b9259b58a29",
".git/index": "131f49c507dde5b93a354c979b9a613d",
".git/logs/refs/heads/master": "fc428445cb03bc47caeae7233fdddd8e",
".git/logs/refs/remotes/origin/master": "0046bb8943fea4fc9e63e1180595ba8a",
".git/logs/HEAD": "fc428445cb03bc47caeae7233fdddd8e",
".git/refs/heads/master": "aaad8a0e0415758c1da937904d749c28",
".git/refs/remotes/origin/master": "aaad8a0e0415758c1da937904d749c28",
".git/objects/a5/955e25ec69501e2c93129bf50937f9311f1e1e": "f2293aa7b29400e4e4e398e1c471cb2f",
".git/objects/c8/fc6f9e20d4b5667c8532ccd8778f0a56da0b09": "03f3778c47b638c2733d44a0cc0e055e",
".git/objects/c1/3fa609d8c20e9a3c1335dd2b2f9465591e2e85": "5ef130558e5a68b50f6c410d4c5d5ee8",
".git/objects/74/1f61f0100340609d47c220ede032197b192a0e": "9fb652436500a29ea546309d7cc0e393",
".git/objects/b5/818067640838bea7eecb3db5c19e7536c2b5b0": "b1bb67afe9827c0805dec72bd099a735",
".git/objects/12/fbe11da2a74f84b89899571a490fc9e427fb69": "31c7421d2ccc2a6a266f7db97ef4463a",
".git/objects/41/ae66ad60e3b270a2a4cb911381846ef94df10d": "eecd8dcaa67e4393526a8884be1e6f1a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/52/b59ca4fdb343c1e840b9a8c85058c0a6703ab1": "ef93e7e1e8a0332b928a24f9b814ebeb",
".git/objects/1c/33c64443134a9baf45e5f4be245c33061269a9": "2df6b10a36e2fa839b85c18b876f40d5",
".git/objects/26/bb4cafd01567e7e7e1fb5126ea36f6ff99d1d5": "183770b05441c40ee0805120425542d7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/ce57ea11c4287edb09f9a1fead213c845aa96d": "00eaf3cbd7266853e3b44757575da976",
".git/objects/49/cf3f6c5746c2188a7d4db692a3ee949ceca355": "3dfaba79afc4fe9f37238b3c782f2a86",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/ad/776f984172a9143ae5a1ba1eead26fa4a2423c": "34e4ab0b9785ab3ee89856328cad4841",
".git/objects/75/f55d11c85178e3d762ffe954581028d8e753f6": "2166b3a466f0633434c08da4f82969d4",
".git/objects/2b/4107e1359b696ff103d60e197541ff5f780b28": "409eafd2f5284a51dbf125c561b5830e",
".git/objects/b7/100993d2fba351af82054ee54ed083e2ce3d70": "fade4fca7944135b470bc480942ebe49",
".git/objects/40/5c5cc97191ea36a05a39c4fa665fef638a9318": "c2aa14e99576308854e66d44d0e7cfca",
".git/objects/f2/3a73799e01f1a570c0567202e22bb905a68e32": "750efdc5db492ce71189d3a8f9424070",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/d8/58afc1e077048559ce0e0d14417adf66bfe37d": "b02b0649a0e714835757d80da0a75604",
".git/objects/bc/146a063d8c907a3556f67eba2c2ae3c22fa5a2": "9eab3ea5f0814b37edcff91b23b463b5",
".git/objects/c5/2ce32cb631ebc13a3edc298f56c29fa56c0027": "d4b49bb39fee4b694d5db712cbbfd993",
".git/objects/4d/0e6691b5e68e8c77d977df3f8a9e4e6c287fdc": "2f4b0550c51c09e6205f8b14d19725cc",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/92/40a6cef9b7d1eb673ee92b83ad46695a53f0fb": "9aa4f619b0b0da64c2deb1615e1d06d1",
".git/objects/3f/23624d77e01af72e86d96dd24305b2657fcec7": "cadb53453fa1e22570da8d9e76d73695",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/18/0f7ef8b1b6a8fc7bbb83a37d2dbf7f88bc6c80": "9f7a6544c4a58c51412bb02c2615089a",
".git/objects/97/cca204151ac5bd5d69e46c940fc55a93c936e6": "1a0f39742090cb7747bca5483fc6c05a",
".git/objects/fb/6834daea11450450975f03718b92ed13a008b4": "ae5bec1fa0b83a55b8c7f8cb18249b5f",
".git/objects/e9/51e400c5a80e7e2ae093e6ebc3fe8d62e4c8e2": "0a92759e65da8230a4676bc53cc6f2c4",
".git/objects/8c/4a4af3610674a1ad654099303b9793b60bab28": "c8859df24c07bd3401515e6a595abf8d",
".git/objects/ac/e63387a41cf8a54bfc58f02ffac28ecaa65dae": "e143bb77acbbbedc82143527e8a7a0fe",
".git/COMMIT_EDITMSG": "fe4c174cecf030f812e5997586df06b5",
".git/config": "91d91879388f1e844530158519e35864",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"main.dart.js": "5098b2a6ecebd9ca3ba52a8fe4370681",
"assets/FontManifest.json": "c05273bc1cf6ff912c2d8b01c35d8793",
"assets/AssetManifest.json": "a8185e05e7d04438e73fd5d0a17cdb34",
"assets/NOTICES": "57be1f095a526b9b289216fdb92ef6a0",
"assets/assets/lottie/loader.json": "5633d4253c974f5da5afbda605754b76",
"assets/assets/fonts/lexend-deca.ttf": "63e0fd493b90c4d30406ef2e3c4e94f4",
"assets/assets/fonts/rubik.ttf": "b3d0902b533ff4c4f1698a2f96ddabab",
"assets/assets/fonts/galano.ttf": "6067d51bd70ea9bc2b7422a35d905064",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"index.html": "57bda1fa2797931fc09f33f33bdfca6c",
"/": "57bda1fa2797931fc09f33f33bdfca6c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
