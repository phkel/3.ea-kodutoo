// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict'

chrome.alarms.onAlarm.addListener(function () {
  chrome.browserAction.setBadgeText({text: ''})
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'stretch.png',
    title: 'Time to jump',
    message: 'Move yourself for your own good',
    buttons: [
      {title: 'Yaaashh'}
    ],
    priority: 0})
})

chrome.notifications.onButtonClicked.addListener(function () {
  chrome.storage.sync.get(['minutes'], function (item) {
    chrome.browserAction.setBadgeText({text: 'ON'})
    chrome.alarms.create({delayInMinutes: item.minutes})
  })
})
