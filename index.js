const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongooseDSN = 'mongodb://localhost:27017/carepak';
const UserModel = require('./model/user');

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
// app.get('/')

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