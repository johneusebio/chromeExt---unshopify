chrome.runtime.onInstalled.addListener(function (object) {
    let externalUrl = "https://github.com/johneusebio/chromeExt---unshopify?tab=readme-ov-file";

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: externalUrl }, function (tab) {
            console.log("New tab launched with https://github.com/johneusebio/chromeExt---unshopify?tab=readme-ov-file");
        });
    }
});