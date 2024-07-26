document.getElementById('toggleProxy').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "toggleProxy" });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.status) {
      document.getElementById('toggleProxy').textContent = request.status;
    }
  });
  