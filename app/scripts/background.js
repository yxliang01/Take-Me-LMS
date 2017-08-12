chrome.browserAction.onClicked.addListener((tab)=> {

  if(tab.url.indexOf('chrome://newtab/') !== -1) {
    chrome.tabs.update(tab.id, {
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
