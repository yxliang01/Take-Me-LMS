chrome.browserAction.onClicked.addListener((tab)=> {

  if(tab.url === 'chrome://newtab/') {
    chrome.tabs.update(undefined, {
      url: 'https://app.lms.unimelb.edu.au/',
      active: true,
    });
  } else {
    chrome.tabs.create({
      url: 'https://app.lms.unimelb.edu.au/',
      active: true,
    });
  }


});
