chrome.contextMenus.create({
  id: "youtubeSearch",
  title: "Search on YouTube",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info) {
  if (info.menuItemId === "youtubeSearch") {
    var query = encodeURIComponent(info.selectionText);
    var searchUrl = "https://www.youtube.com/results?search_query=" + query;
    chrome.tabs.create({ url: searchUrl });
  }
});
