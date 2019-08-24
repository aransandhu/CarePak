const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackageSchema = new Schema({
  items: [{
      type: Schema.Types.ObjectId,
      ref: 'Item',
  }]
})

module.exports = mongoose.model('User', PackageSchema);