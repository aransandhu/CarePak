const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const iplocation = require("iplocation").default;
var ip = require('ip');

var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

// const mongooseDSN = 'mongodb://localhost:27017/carepak';
// const UserModel = require('./model/user');
// const PackageModel = require('./model/package');
// const DonationModel = require('./model/donation');
// const ItemModel = require('./model/item');

const app = express();
const DB_PATH = 'db/sqlite.db'
var port = 8000
const db = new sqlite3.Database(DB_PATH, function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + DB_PATH + ' database.')
});

app.use(bodyParser.urlencoded({ extended : true}));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

var sql = fs.readFileSync('db/test.sql').toString();
console.log(sql);

db.run(sql, (err) => {
  if (err) {
    console.log('ERROR!', err)
  }
})

// User route
//
// app.get('/user/signup', (req, res) => {
//     return res.json({
//         hi: 'hi'
//     });
// })

// // signup route - create user
// app.post('/user/signup', async (req, res, next) => {
//     try {
//         console.log(req.body);
//         var user = new UserModel({
//             username: req.body.username,
//             password: req.body.password,
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             email: req.body.email,
//             phone: req.body.phone,
//             icon: req.body.icon,
//             history: []
//         });
//         const savedUser = await user.save();
//         return res.json(savedUser);
//     } catch(err) {
//         return next(err);
//     }
// });
//

// // get all packages
// app.get('/all_packages', async (req, res, next) => {
//     try {
//         var packages = await PackageModel.find(
//         ).populate('items.item');
//         res.json(packages);
//     } catch(err) {
//         return next(err);
//     }
// });

// app.get('/create_package', async (req, res, next) => {
//     try {
//         var newPackage = new PackageModel({
//             items: []
//         });
//         const savedPackage = await newPackage.save();
//         return res.json(savedPackage);
//     } catch(err) {
//         return next(err);
//     }
// });

// app.post('/add_item_to_package', async (req, res, next) => {
//     try {
//         var newItem = new ItemModel({
//             name: req.body.name,
//             price: req.body.price,
//             picture: req.body.picture,
//             category: req.body.category
//         });
//
//         const savedItem = await newItem.save();
//         await PackageModel.update(
//             {_id: mongoose.Types.ObjectId(req.body.packageId)},
//             {$push: {items: {item: savedItem._id, amountPaid: 0, numDonations: 0}}}
//         );
//         const updatedPackage = await PackageModel.findById(req.body.packageId);
//         return res.json(`New Item ${JSON.stringify(savedItem)} added to package ${JSON.stringify(updatedPackage)}`);
//     } catch(err) {
//         return next(err);
//     }
// });

app.get('/popular/', async (req, res, next) => {
    var location = req.body.location;
    let topX = 6;

    var sql = "SELECT y.* FROM Packages y WHERE ? = y.City ORDER BY NumberDonations LIMIT ?";
    db.get(sql, [location, topX], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
			  }
			  res.json(row);
		});
});

app.get('/popular/', async (req, res, next) => {
    let topX = 6;

    var sql = "SELECT y.* FROM Packages y ORDER BY NumberDonations LIMIT ?";
    db.get(sql, [topX], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});

app.get('/topBoxType/', async (req, res, next) => {
    let packageID = req.body.packageID;
    let topX = 2;

    var sql = "SELECT y.Package_id, x.Category, Count(y.Item_id) as total FROM PackageItem y INNER JOIN Item x ON y.Item_id = x.id WHERE y.Package_id = ? GROUP BY y.Package_id, x.Category SORT BY total LIMIT ?";
    db.get(sql, [packageID, topX], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});

app.get('/userInterests/', async (req, res, next) => {
    let userID = req.body.userID;
    let topX = 5;

    var sql = "SELECT x.User_id, y.Category, Count(x.Item_id) as total FROM History x INNER JOIN Item y ON x.Item_id = y.Id WHERE x.User_id = ? GROUP BY x.User_id, y.Category SORT BY total LIMIT ?";
    db.get(sql, [userID, topX], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});

app.get('/boxInfo/', async (req, res, next) => {
    let packageID = req.body.packageID;

    var sql = "SELECT * FROM Packages x WHERE x.Id = ?";
    db.get(sql, [packageID], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});

app.get('/userInfo/', async (req, res, next) => {
    let userID = req.body.userID;

    var sql = "SELECT * FROM User x WHERE x.Id = ?";
    db.get(sql, [userID], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});

app.get('/userDonationHistory/', async (req, res, next) => {
    let userID = req.body.userID;

    var sql = "SELECT * FROM History x WHERE x.User_id = ?";
    db.get(sql, [userID], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});

app.get('/category/', async (req, res, next) => {
    let category = req.body.category;
    var sql = "SELECT x.* FROM Packages x INNER JOIN PackageItem y ON x.ID = y.Package_id INNER JOIN Item z ON y.Item_id = z.id GROUP BY x.id, z.category ORDER BY Count(y.Item_id);"

    db.get(sql, [category], function (err, row){
  			if (err) {
          res.status(500);
  			} else if (row) {
          res.status(200);
			  } else {
				  res.status(401);
		    }
		    res.json(row);
		});
});


app.post('/userDonation/', async (req, res, next) => {
    let userID = req.body.userID;
    let itemID = req.body.itemID;
    let amount = req.body.amount;
    let packageID = req.body.packageID;

    db.serialize(function (){
        var sql = "INSERT INTO History VALUES (?, ?, ?, ?);";
        var d = new Date();
        var dateAsString = d.toString();
        var params = [userID, itemID, dateAsString, amount];

  			db.run(sql, params, function(err){
          if(err){
            res.status(500);
          }
          else{
            res.status(200);
          }
        });

        var sql = "UPDATE PackageItem SET NumberDonations = NumberDonations + 1, paidSoFar = paidSoFar + ? WHERE Package_id = ? AND Item_id = ?;";
        var params = [amount, packageID, itemID];
        db.run(sql, params, function(err){
          if(err){
            res.status(500);
          }
          else{
            res.status(200);
          }
        });
		});
});


app.listen(port, function () {
  	console.log('Example app listening on port '+port);
});
//DB.close();
