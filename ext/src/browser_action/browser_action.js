Firebase.enableLogging(true);
var f = new Firebase('https://inifinitidrive.firebaseio.com/');

var users = f.child("users");
var requests = f.child("requests");

$('#help-btn').on('click', function() {
    requests.push({ username: 'Bob-Knows-Nothing', url: 'https://github.com/bs', done: false });
});

$('#requests').on('click', 'p', function(e) {
    var $target = $(e.target),
        id = $target.attr('id'),
        request = requests.child(id);

    request.update({ done: true});
    $target.remove();
});

requests.limit(100).on('child_added', function(req) {
    var id = req.name();
    var request = req.val();
    if (request.done) return;
    $('#requests').append(['<p id="', id,'">', request.username, ':', request.url, '</p>'].join('') );
});

requests.on('child_changed', function(req) {
    var request = req.val(),
        id = req.name();
    if(request.done) $("#" + id).remove();
});
