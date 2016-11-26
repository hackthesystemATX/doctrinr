// Handle requests for passwords
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'request_doctrinr') {
        chrome.tabs.create({
            url: chrome.extension.getURL('dialog.html'),
            active: false
        }, function(tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                top: 30,
                left: 30,
                height: 250,
                width: 700
                // incognito, top, left, ...
            });
        });
    }
});
// function setPassword(password) {
//     // Do something, eg..:
//     console.log(password);
// };