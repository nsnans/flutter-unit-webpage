'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e54a5a90c17b67f73ba1537228db775c",
"assets/AssetManifest.bin.json": "3255890b5fd8359c91a367163ef90ab0",
"assets/AssetManifest.json": "025f8427f061168760f3c0f9b64b3209",
"assets/assets/data/gallery_info.json": "63682979e72e7b4948fc61d3a61cf4c1",
"assets/assets/data/web/node.json": "8aa95e35706bcc5bf4df9826981dad67",
"assets/assets/data/web/widget.json": "37bb626dfafd7a58c53fefb6ffde0448",
"assets/assets/flutter.db": "1f9e4d3783350c23437f975873bd1395",
"assets/assets/fonts/BalooBhai2-Regular.ttf": "7c94be72174267b3aac61b9ab4df2af7",
"assets/assets/fonts/CHOPS.ttf": "2fdc9975f98dd272396edd1f7ad43cca",
"assets/assets/fonts/ComicNeue-Regular.ttf": "52497ef6e2a57915ff534c342e49a95b",
"assets/assets/fonts/Inconsolata-Regular.ttf": "9d52a8c4fafc763d9a356d8b67d4a2e6",
"assets/assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/assets/fonts/Neucha-Regular.ttf": "8e7a91accfee66949d8f243573b80839",
"assets/assets/iconfont/toly_icon.ttf": "a2eedb232b26f1b0175fd5e97e1c2bb7",
"assets/assets/images/anim_draw.webp": "d39b873905648b2585ef721df43b57a9",
"assets/assets/images/base_draw.webp": "6205685a13464d8eeac6f3503efdef87",
"assets/assets/images/caver.webp": "0daec42d311b443a213495207156ecfc",
"assets/assets/images/coffee_wx.webp": "e589ca9ec069860aabd6bc82b51d1d54",
"assets/assets/images/coffee_wx_ac.webp": "05441826d9d95d9e3acd4537439f13bd",
"assets/assets/images/coffee_zfb.webp": "453ba0e24b37b06bd2225f5de644e16b",
"assets/assets/images/dart.webp": "174ee5597f4e89922e02b31b2d2aed70",
"assets/assets/images/draw_bg3.webp": "933df5ebe2911dd49aa01504788ff69d",
"assets/assets/images/draw_bg4.webp": "e627849af978ce0882bb326e4cd33554",
"assets/assets/images/flutter.png": "f8413ed3a7fcb1a3a3a88609bedce3ef",
"assets/assets/images/head_icon/icon_5.webp": "6f075db07004fe42f14e4f49792fde53",
"assets/assets/images/head_icon/icon_6.webp": "2d028ada7ef2ac8f302fa71588a68e40",
"assets/assets/images/head_icon/icon_7.webp": "165ed3ed6a8f230c175d4b96aaa3c6d3",
"assets/assets/images/head_icon/icon_8.webp": "1e2074c0b63e55354191ec4f73fe5c92",
"assets/assets/images/icon_head.webp": "ac762e8f5772ac67661b4a1911a864ec",
"assets/assets/images/java.webp": "122c0f45a99638ed19c39bd5413cf8d6",
"assets/assets/images/kotlin.webp": "5931862317c5b571e2b17c6a36281403",
"assets/assets/images/leaf.webp": "4d21215dba45c5aa45c195e42cf1578a",
"assets/assets/images/left_chat.png": "6a029c3e180fe11ac4d2a0a456ae853f",
"assets/assets/images/logo1.webp": "effd45beb843a31f629e628eb7c4d2db",
"assets/assets/images/right_chat.png": "1a92a7917382d085e5e5cca9479b5e97",
"assets/assets/images/sabar.webp": "fb519802ddef16aff6d9a2d414ee6be3",
"assets/assets/images/sabar_bar.webp": "8bf0884e36b7f7360f838dbc0014f9da",
"assets/assets/images/wechat.webp": "e4973300ecac8bab68d4239ef4e4035c",
"assets/assets/images/widgets/ActionChip.webp": "24c4742cfc55c1ccf0957e8b23da41b1",
"assets/assets/images/widgets/Banner.webp": "9454484ecbaf8e3fd06f11551a032bc9",
"assets/assets/images/widgets/Card.webp": "e6aaad9b8ff6111abfa2de51aa3e53cf",
"assets/assets/images/widgets/CheckBoxListTile.webp": "8a5af8a8391eb0b2514909445896ad6a",
"assets/assets/images/widgets/Chip.webp": "8450ba056a3307cbd794db13af6e102a",
"assets/assets/images/widgets/ChoiceChip.webp": "7054079fa5e8575bcccdb364fba25971",
"assets/assets/images/widgets/Container.webp": "582c328f4ec53fedddea6eeb386f4bd2",
"assets/assets/images/widgets/FilterChip.webp": "806fdd59996fe92b0f0663468274747f",
"assets/assets/images/widgets/FlutterLogo.webp": "7341ea99ac003c01fa689a78fdd3296b",
"assets/assets/images/widgets/GridTile.webp": "0e5cd5eec4dee684802bb6ee370de7e7",
"assets/assets/images/widgets/GridTileBar.webp": "c248180c74c098a23172959333340750",
"assets/assets/images/widgets/Icon.webp": "af2b5b89d2721b0bfa83dfa92b92ee82",
"assets/assets/images/widgets/ImageIcon.webp": "60db3cdd8ea02bf1f805f75cc9847f50",
"assets/assets/images/widgets/InputChip.webp": "fc48be6b43eaa88aa56aba19f4a222f3",
"assets/assets/images/widgets/ListTile.webp": "7ad1ce104b826cef5982fee656fd5257",
"assets/assets/images/widgets/RadioListTile.webp": "3c9a56b39aef8bd29d4ec9ff39e8c76b",
"assets/assets/images/widgets/SwitchListTile.webp": "d95b45bde3566de700c8715562f72717",
"assets/assets/images/widgets/Text.webp": "c86cb1e2dda75b0df70c05d42ad8c95a",
"assets/assets/images/widgets/UserAccountsDrawerHeader.webp": "8606dc0634f785dc727e135aca0355e3",
"assets/assets/images/widgets/Visibility.webp": "622c4e11a498c1f96c7279b8ad67a6d1",
"assets/assets/images/wxgzh.webp": "560a98e2245024e5a1962a40cef57d66",
"assets/assets/images/wy_200x300.webp": "32b5a5e9cf71762b24549c79f74c55dd",
"assets/assets/images/wy_300x200.webp": "3a4266ac508ba5ddfcb23dd79cdcb2df",
"assets/assets/images/wy_300x200_filter.webp": "2a039fac1d66097352d329f3e1926196",
"assets/assets/images/wy_30x20.webp": "4cab6d76b4bb86f03f2b21619ce9be34",
"assets/assets/version.json": "1c2af29c66bdc97dfc92523b40bfb8e3",
"assets/FontManifest.json": "c4a5beb20854db0236511ceffb40ddeb",
"assets/fonts/MaterialIcons-Regular.otf": "9a3bfaae4a2152871688671638908488",
"assets/NOTICES": "5c83722a5a182b27bc54b17b721c6d07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "34ac98d90da541d6af2d6ea63b711161",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a9810b13928a09e36fca9aa74742f106",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "87564f0c7dbd08c052356d3f23f9a647",
"/": "87564f0c7dbd08c052356d3f23f9a647",
"main.dart.js": "96d9cbbb23e99fa3f7bf6feef6770dce",
"manifest.json": "47b9ce98a34427025113daf3b3c16f0c",
"splash.gif": "461b53398abd77bc5410ab24674a2a56",
"splash.js": "cdcb24bcd3054a3465d5a2a764183aa8",
"version.json": "946e125bac0b610ede61f64b34edd406"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
