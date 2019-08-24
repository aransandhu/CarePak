const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackageSchema = new Schema({
  items: [{
<<<<<<< HEAD
      item: { type: Schema.Types.ObjectId,
      ref: 'Item',
      }, 
      amountPaid: Number,
      numDonations: Number,
=======
      item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'},
      amountPaid: Number,
      numDonations: Number
>>>>>>> progress
  }]
});

module.exports = mongoose.model('Package', PackageSchema);
