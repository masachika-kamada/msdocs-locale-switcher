chrome.action.onClicked.addListener((tab) => {
  const url = new URL(tab.url);

  if (url.hostname.endsWith("microsoft.com")) {
    const pathSegments = url.pathname.split("/").filter(segment => segment);

    if (pathSegments[0] === "ja-jp") {
      pathSegments[0] = "en-us";
    } else if (pathSegments[0] === "en-us") {
      pathSegments[0] = "ja-jp";
    }

    url.pathname = "/" + pathSegments.join("/");

    chrome.tabs.update(tab.id, { url: url.toString() });
  }
});
