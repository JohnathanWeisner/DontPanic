var userName = '';
var currentRepo = '';
var url = '';


(function() {
  userName = $('.name')[0].getAttribute('href');
  currentRepo = $('.js-current-repository')[0].getAttribute('href');
  url = document.URL;
  console.log(userName, url)
}).call(this);
