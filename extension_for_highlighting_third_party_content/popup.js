// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Store CSS data in the "local" storage area.
//
// See note in options.js for rationale on why not to use "sync".
var message = document.querySelector('#message');

//*************TEST CODE FOR GETTING URL
chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    //message.innerText = tablink

    if(tablink.includes("cnn")) {
        // Insert CSS Into website
        chrome.tabs.insertCSS({file: "cnn_third_party.css"}, function() {
          if (chrome.runtime.lastError) {
            message.innerText = 'Not allowed to inject CSS into special page (CNN).';
          } else {
            message.innerText = 'Look for the yellow dots (CNN)!';
          }
        });
        chrome.tabs.executeScript(null, {file: "content_script.js"});
      }
    else if(tablink.includes("facebook")) {
      // Insert CSS Into website
      chrome.tabs.insertCSS({file: "facebook_third_party.css"}, function() {
        if (chrome.runtime.lastError) {
          message.innerText = 'Not allowed to inject CSS into special page (Facebook).';
        } else {
          message.innerText = 'Look for the yellow dots (Facebook)!';
        }
      });
    }
    //nytimes
    else {
      chrome.tabs.insertCSS({file: "nytimes_third_party.css"}, function() {
        if (chrome.runtime.lastError) {
          message.innerText = 'Not allowed to inject CSS into special page (NY Times).';
        } else {
          message.innerText = 'Look for the green dots (NY Times)!';
        }
      });

    }

});
