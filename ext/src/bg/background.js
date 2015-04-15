Firebase.enableLogging(true);
var f = new Firebase('https://inifinitidrive.firebaseio.com/');

var requests = f.child("requests")

var output = 0

requests.limit(100).on('child_added', function(req) {
	request = req.val()
    if (!(request.done)){
    	output += 1
    };
	chrome.browserAction.setBadgeText({text: output.toString()})
});