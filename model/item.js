const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: {
    type: String
  },
  amountNeeded: {
    type: Number
  },
  picture: {
    type: String
  },
  category: {
    type: String
  }
})

module.exports = mongoose.model('Item', ItemSchema);