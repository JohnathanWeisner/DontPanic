function check(tabId, changeInfo, tab) {
  user = tab.url.split("/")[3]
  repo = tab.url.split("/")[4]
  // userName = $('.name')[0].getAttribute('href');
  // var currentRepo = $('.js-current-repository')[0].getAttribute('href');
  // var URL = document.URL;
  // $('#root').append(userName)
  // console.log(userName)
  // console.log('window')


  if (tab.url.indexOf('github.com/') > -1 && user && repo) {
    chrome.pageAction.show(tabId);
  }
}

chrome.tabs.onUpdated.addListener(check);
