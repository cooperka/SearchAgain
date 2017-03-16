chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'search',
    contexts: ['selection'],
    title: 'Search Again for "%s"',
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    console.log('Selected:', info.selectionText);
  });
});
