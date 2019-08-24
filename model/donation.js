const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  package: {
    type: Schema.Types.ObjectId,
    ref: 'Package',
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
  amount: {
    type: Number,
  }
});

module.exports = mongoose.model('Donation', DonationSchema);