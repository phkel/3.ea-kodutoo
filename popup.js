// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// /* globals Hls */
'use strict'

const buttonMonochrome = document.getElementById('monochrome')
const buttonSepia = document.getElementById('sepia')
const buttonRainbow = document.getElementById('rainbow')

buttonMonochrome.onclick = function (element) {
  chrome.tabs.insertCSS(null, {file: 'monochrome.css'})
}

buttonSepia.onclick = function (element) {
  chrome.tabs.insertCSS(null, {file: 'sepia.css'}) 

}

buttonRainbow.onclick = function (element) {
  chrome.tabs.insertCSS(null, {file: 'rainbow.css'})
}

// var video = document.getElementById('video')
// if (Hls.isSupported()) {
//   var hls = new Hls()
//   hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8')
//   hls.attachMedia(video)
//   hls.on(Hls.Events.MANIFEST_PARSED, function () {
//     video.play()
//   })
// } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
//   video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
//   video.addEventListener('canplay', function () {
//     video.play()
//   })
// }

// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
// This is using the built-in support of the plain video element, without using hls.js.

/*   "permissions": ["activeTab", "https://sb.err.ee/live/raadio2.m3u8"]
  "content_security_policy": "script-src 'self' https://cdn.jsdelivr.net/npm/hls.js@latest 'sha256-ZcTc0nFeBRyCB8RFKeN9jzF0i+B0bcYNPZB0+BCtoBY='; object-src 'self'", */
