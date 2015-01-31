var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var studentSchema = new Schema({
  ip_address: String,
  location: String
});

var coachSchema = new Schema({
  
});

mongoose.model('Student', studentSchema);
mongoose.model('Coach', coachSchema);

mongoose.connect(process.env.DONTPANIC_DB);