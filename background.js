let isProxyEnabled = false;

chrome.runtime.onInstalled.addListener(() => {
  updateProxy();
});

chrome.action.onClicked.addListener(() => {
  isProxyEnabled = !isProxyEnabled;
  updateProxy();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleProxy") {
    isProxyEnabled = !isProxyEnabled;
    updateProxy();
    sendResponse({ status: isProxyEnabled ? "AnyOne is ON" : "AnyOne is OFF" });
  }
  return true; // This keeps the message channel open for sendResponse
});

function updateProxy() {
  if (isProxyEnabled) {
    chrome.action.setIcon({ path: "icon-on.png" });
    chrome.proxy.settings.set(
      {
        value: {
          mode: "fixed_servers",
          rules: {
            singleProxy: {
              scheme: "socks5",
              host: "51.75.175.30",
              port: 9050
            },
            bypassList: ["<local>"]
          }
        },
        scope: 'regular'
      },
      () => { console.log("Proxy set"); }
    );
  } else {
    chrome.action.setIcon({ path: "icon-off.png" });
    chrome.proxy.settings.clear({ scope: 'regular' }, () => { console.log("Proxy cleared"); });
  }
}
