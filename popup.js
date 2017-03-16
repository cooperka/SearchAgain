const { PREFIX_KEY, SUFFIX_KEY } = chrome.extension.getBackgroundPage().constants;

function handleInput(key, event) {
  const value = event.target.value;
  chrome.storage.sync.set({ [key]: value });
}

document.addEventListener('DOMContentLoaded', () => {
  const prefix = document.getElementById(PREFIX_KEY);
  const suffix = document.getElementById(SUFFIX_KEY);

  chrome.storage.sync.get([PREFIX_KEY, SUFFIX_KEY], (values) => {
    prefix.value = values[PREFIX_KEY] || '';
    suffix.value = values[SUFFIX_KEY] || '';

    prefix.addEventListener('change', handleInput.bind(null, PREFIX_KEY));
    suffix.addEventListener('change', handleInput.bind(null, SUFFIX_KEY));
  });
});
