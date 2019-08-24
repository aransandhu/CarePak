const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackageSchema = new Schema({
  itemsQty: [{
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
    qty: {
      type: Number
    }
  }]
})

module.exports = mongoose.model('User', PackageSchema);