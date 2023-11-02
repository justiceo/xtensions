var IS_DEV_BUILD=true;
(() => {
  // src/popup/popup.ts
  document.querySelector("button")?.addEventListener("click", (e) => {
    maybeSendDefinition();
  });
  document.querySelector("input")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      maybeSendDefinition();
    }
  });
  function maybeSendDefinition() {
    const text = document.querySelector("input")?.value;
    if (!text) {
      return;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length == 0) {
        console.error("Unexpected state: No active tab");
        return;
      }
      chrome.tabs.sendMessage(tabs[0].id, { action: "verbose-define", data: text }, (response) => {
        console.log(response);
        window.close();
      });
    });
  }
})();
//# sourceMappingURL=popup.js.map
