Firebase.enableLogging(true);
var f = new Firebase('https://inifinitidrive.firebaseio.com/');

var users = f.child("users");
var requests = f.child("requests");

$('help-btn').on('click', function() {
    requests.push({username:'Bob-Knows-Nothing', url: 'https://github.com/bs'})
});

requests.on('child_added', function(req) {
    var request = req.val();
    $('#requests').append(['<p>', request.username, ':', request.url, '</p>'].join('') )
})

// var number = function (curr) {
//     if (isNaN(parseFloat(curr)))
//         return 1; // initialize to 1.
//     else
//         return curr + 1; // increment.
// }

// var name = function (username) {
//     if (username)
//         return username; // initialize to 1.
//     else
//         return "default"; // increment.
// }

// var updateNumber = function() {
//     f.on('value', function(s) {
//       document.getElementById('contents').innerHTML = s.val();
//     });
// }

// user.transaction(number, updateNumber);