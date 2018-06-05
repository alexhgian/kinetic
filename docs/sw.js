/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.css",
    "revision": "e5e7bdbce663087be39a01d77daf7a40"
  },
  {
    "url": "build/app.js",
    "revision": "ce6490c279a77ea0f73b9b5ce209b421"
  },
  {
    "url": "build/app/3wtgif4m.es5.js",
    "revision": "8b847a978b5838ba295390aa20c30401"
  },
  {
    "url": "build/app/3wtgif4m.js",
    "revision": "99dcecb2e7feffd0aff92d3c850ade56"
  },
  {
    "url": "build/app/app.ovq895hp.js",
    "revision": "52701df597e41f95d861c5082ad29f93"
  },
  {
    "url": "build/app/app.rtrdglx6.js",
    "revision": "b8c190c5a64d662fe4afb174578ac0da"
  },
  {
    "url": "build/app/chunk-1d835f9d.es5.js",
    "revision": "6d6ce6ea7a60a763dba7c00f55d291ce"
  },
  {
    "url": "build/app/chunk-88b8f1ee.js",
    "revision": "814975b03465481828754366e92deea2"
  },
  {
    "url": "build/app/h7wk1meh.es5.js",
    "revision": "f36ccf8b67d11b054f42e3250c7fc1cd"
  },
  {
    "url": "build/app/h7wk1meh.js",
    "revision": "0e222f6d4b379bd7723db2720056ca27"
  },
  {
    "url": "build/app/loettoy3.es5.js",
    "revision": "341012f0e5919e03a63ef7878f559096"
  },
  {
    "url": "build/app/loettoy3.js",
    "revision": "b9c0b704c6a7571852e1884c41388781"
  },
  {
    "url": "index.html",
    "revision": "b587884a0f1d6554f3ca1d492dbd1e53"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
