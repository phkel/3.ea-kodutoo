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

function setAlarm (event) {
  let minutes = parseFloat(event.target.value)
  chrome.browserAction.setBadgeText({text: 'ON'})
  chrome.alarms.create({delayInMinutes: minutes})
  chrome.storage.sync.set({minutes: minutes})
  window.close()
}

document.getElementById('monochrome').addEventListener('click', setAlarm)
document.getElementById('sepia').addEventListener('click', setAlarm)
document.getElementById('rainbow').addEventListener('click', setAlarm)
