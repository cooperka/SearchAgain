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

      const searchString = encodeURIComponent(`${prefix} ${info.selectionText} ${suffix}`);
      const url = `https://www.google.com/search?q=${searchString}`;

      chrome.tabs.create({ url });
    });
  });
});
