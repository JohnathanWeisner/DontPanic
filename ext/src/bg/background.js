Firebase.enableLogging(true);
var f = new Firebase('https://inifinitidrive.firebaseio.com/');

var requests = f.child("requests")

var output = 0
var new_output = 0

requests.limit(100).on('child_added', function(req) {
	request = req.val()
    if (!(request.done)){
    	output += 1
		  chrome.notifications.create('new_request', {type: 'basic', title: request.username + ' needs help!', message: "Now's your time coach!", iconUrl: '../../icons/dont_panic.png'}, function(){})
    }
	chrome.browserAction.setBadgeText({text: output.toString()})
});

requests.limit(100).on('child_changed', function(req) {
    request = req.val()
    console.log(request)
    if (request.done){
        output -= 1
    }
    chrome.browserAction.setBadgeText({text: output.toString()})
});