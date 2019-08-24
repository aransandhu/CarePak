const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String,
  },
  icon: {
    type: String
  },
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'Donation'
  }]
});

module.exports = mongoose.model('User', UserSchema);