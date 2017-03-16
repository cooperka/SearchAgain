const { PREFIX_KEY, SUFFIX_KEY } = constants;

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'search',
    contexts: ['selection'],
    title: 'Search Again for "%s"',
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    chrome.storage.sync.get([PREFIX_KEY, SUFFIX_KEY], (values) => {
      const prefix = values[PREFIX_KEY] || '';
      const suffix = values[SUFFIX_KEY] || '';

      console.log('Selected:', prefix, info.selectionText, suffix);
    });
  });
});
