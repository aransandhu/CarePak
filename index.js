const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongooseDSN = 'mongodb://localhost:27017/carepak';
const UserModel = require('./model/user');
const PackageModel = require('./model/package');
const DonationModel = require('./model/donation');

const app = express();

app.use(bodyParser.urlencoded({ extended : true}));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// User route
//
// app.get('/user/signup', (req, res) => {
//     return res.json({
//         hi: 'hi'
//     });
// })

// signup route - create user
app.post('/user/signup', async (req, res, next) => {
    try {
        console.log(req.body)
        var user = new UserModel({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            icon: req.body.icon,
            history: [],
        });
        const savedUser = await user.save();
        return res.json(savedUser);
    } catch(err) {
        return next(err);
    }
});

// get all packages
app.get('/all_packages', async (req, res, next) => {
    try {
        var packages = await PackageModel.find(
            { items: { $exists: true, $ne: [] } }
        ).populate('items');
        res.json(packages);
    } catch(err) {
        return next(err);
    }
})

app.post('/create_package', async (req, res, next) => {
    try {
        var newPackage = new PackageModel({
            item: [],
        });
        const savedPackage = await newPackage.save();
        return res.json(savedPackage);
    } catch(err) {
        return next(err);
    }
})

app.post('/add_item_to_package', async (req, res, next) => {
    try {
        var item = new item({
            name: req.body.name,
            amountNeeded: req.body.amountNeeded,
            picture: req.body.picture,
            category: req.body.category,
        });
        const savedItem = await item.save();
        await PackageModel.update(
            {_id: req.packageId},
            {$push: {items: {savedItem._id, 0}}}
        );
        const updatedPackage = await PackageModel.findById(req.packageId);
        return res.json(`New Item ${JSON.stringify(savedItem)} added to package ${JSON.stringify(updatedPackage)}`);
    } catch(err) {
        return next(err);
    }
})

add.post('/donate', async (req, res, next) => {
    // create donation object
    // add donate object to user history
    // reduce amount needed in item (if 0, delete item from package)
    try {
        var donation = new DonationModel({
            user: req.body.userId,
            item: req.body.itemId,
            amount: req.body.amount,
        })
        const savedDonation = await donation.save();
        await UserModel.update(
            {_id: req.body.userId},
            {$push: {history: savedDonation._id}}
        );

    } catch(err) {
        next(err);
    }
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
mongoose.connect(mongooseDSN, {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log(`connected to mongodb`);
    app.listen(port);
    console.log('App is listening on port ' + port);
  })
