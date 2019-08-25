const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: {
    type: String
  },
  price: {
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
