const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackageSchema = new Schema({
  items: [{
      item: { type: Schema.Types.ObjectId,
      ref: 'Item',
      },
      amountPaid: Number,
      numDonations: Number,
  }]
});

module.exports = mongoose.model('Package', PackageSchema);
