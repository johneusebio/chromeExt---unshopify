chrome.runtime.onInstalled.addListener(function (object) {
    let externalUrl = "http://yoursite.com/";

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: externalUrl }, function (tab) {
            console.log("New tab launched with http://yoursite.com/");
        });
    }
});