'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a70ccaaba1c3b54e25cbac9b4e33f1ac",
"assets/assets/data/node.json": "8aa95e35706bcc5bf4df9826981dad67",
"assets/assets/fonts/ComicNeue-Regular.ttf": "52497ef6e2a57915ff534c342e49a95b",
"assets/assets/iconfont/iconfont.ttf": "c2b0a90b319a2a62534a3c6cc8903fe5",
"assets/assets/images/caver.jpeg": "e4a535d004eccc43f4a6a97e1987a8c9",
"assets/assets/images/caver.webp": "40dd579db51cf337234d8fab026ec969",
"assets/assets/images/dart.jpg": "9023b4b4300b164bd2d311b90378fa09",
"assets/assets/images/head_icon/icon_5.jpg": "9a3e020147287d25afe45eadd2c0e697",
"assets/assets/images/head_icon/icon_6.jpg": "80482290309ece1b7174ec0178172318",
"assets/assets/images/head_icon/icon_7.jpg": "6456e59114dcc67f4a91367a37ad0419",
"assets/assets/images/head_icon/icon_8.jpg": "2f3e65813bafc2bd38321e0fe1c6bb64",
"assets/assets/images/icon_head.png": "6ec021f907a80bf5fa30ebb5e1cd1ed3",
"assets/assets/images/icon_head.webp": "ac762e8f5772ac67661b4a1911a864ec",
"assets/assets/images/java.jpeg": "5cc68b2d19b190b1d8ae1583186f40d1",
"assets/assets/images/kotlin.jpg": "98bd5e2d4b3204243844f7c10aa0f4fc",
"assets/assets/images/leaf.png": "0c2d5d2ef340779ce1d873e886fff2fe",
"assets/assets/images/left_chat.png": "6a029c3e180fe11ac4d2a0a456ae853f",
"assets/assets/images/pica.gif": "a36eb13fb5390e6c48c2e30e1f56ed62",
"assets/assets/images/right_chat.png": "1a92a7917382d085e5e5cca9479b5e97",
"assets/assets/images/sabar.jpg": "c8267a64a7542e5fa763ad5609685d7e",
"assets/assets/images/sabar_bar.jpg": "41ef64de95a7b4852dda163ad3db05de",
"assets/assets/images/wechat.jpg": "2bad8a718971b0dd12c07e0d80ccb588",
"assets/assets/images/wei_x.jpg": "9a0f1dcaacb7eb4d2ef567bfa0503f68",
"assets/assets/images/widgets/ActionChip.png": "79a4a71cff1d2670544d818d4deeccf3",
"assets/assets/images/widgets/Banner.png": "14f5a41b1f9ce55acedf18ca05209536",
"assets/assets/images/widgets/Card.png": "18e2c830992f06f5d97045507af50ffb",
"assets/assets/images/widgets/CheckBoxListTile.png": "3d7f853282557f78b4a555f2e9dc150a",
"assets/assets/images/widgets/Chip.png": "2fc18fc08ea010a6e27e6c89d0317f06",
"assets/assets/images/widgets/ChoiceChip.png": "d564cddd767ff4950fc111024e93e94c",
"assets/assets/images/widgets/CircleAvatar.png": "6f278f278d3ab83a59b6ea82dea5680b",
"assets/assets/images/widgets/Container.png": "75326e934e5cdd5fcda6b54c887e780e",
"assets/assets/images/widgets/FadeInImage.png": "11de49be27032ae3d1e7d0b3917f4907",
"assets/assets/images/widgets/FilterChip.png": "8e9e2206aa1c72cfa7b6d962b521c7a8",
"assets/assets/images/widgets/FlutterLogo.png": "ef84ca87346ce7b631316ac280a40574",
"assets/assets/images/widgets/GridTile.png": "8a4c92e87fcf54bc3e450895f93020d2",
"assets/assets/images/widgets/GridTileBar.png": "a67c3c6ac66840cdd346201076481589",
"assets/assets/images/widgets/Icon.png": "5e33a72ca8d8bbdf7a7017c602568108",
"assets/assets/images/widgets/ImageIcon.png": "e953ffe4cb8cfcee393dccc6a04d3d8a",
"assets/assets/images/widgets/InputChip.png": "1f6e260d69fd560ff81d7dae62bbf8bc",
"assets/assets/images/widgets/ListTile.png": "5a8644eafde8ceb42f81215bd0e25b1d",
"assets/assets/images/widgets/RadioListTile.png": "b07649996d739b7d0e50aca858897f6f",
"assets/assets/images/widgets/SwitchListTile.png": "a902b26b69a0eda1d9cd8db0137ade7c",
"assets/assets/images/widgets/Text.png": "99963cf1bed2be1fdc5a790776c627f6",
"assets/assets/images/widgets/UserAccountsDrawerHeader.png": "83baa9b196fb05b5177a2b451cc38932",
"assets/assets/images/widgets/Visibility.png": "4637bdb29645b72e21423472be264071",
"assets/assets/images/wy_200x300.jpg": "319d06b40451b3a52bb35864da20c598",
"assets/assets/images/wy_300x200.jpg": "924ca2a2c7f84123e3408049f9f14031",
"assets/assets/images/wy_300x200_filter.jpg": "ef1dbfe175aefd88c388249534de3c79",
"assets/assets/images/wy_30x20.jpg": "1480d68f409053ff1b895956b90b474f",
"assets/FontManifest.json": "8e9105dc35c2b1bddb8f97b51604a0e8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7ee5e41950d758542789963e75881dd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/shaders/ink_sparkle.frag": "43ebc9315bc6607094631084534842d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6f28118423b1199127a85d2c3e5a8ba1",
"/": "6f28118423b1199127a85d2c3e5a8ba1",
"main.dart.js": "716e7aaa9f5697d364dbe6ee6f3d6796",
"manifest.json": "a4911a8e824a8c3615a5849cb92368f6",
"version.json": "7ef9e0ad42db96237b27069c3592cdae"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
