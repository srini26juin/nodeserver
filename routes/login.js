var express = require('express');
var router = express.Router();
var app = express();
var url = require('url');
var mongojs = require('mongojs');
var index = require('./index');
var mysql = require('mysql');
// const status = require('http-status');

var db = mongojs('mongodb://srini:srini8865@ds153980.mlab.com:53980/sweet', ['login']);




var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Srini@8865",
  database: "schoolproject"
});

//Get all tasks
router.get('/login', function (req, res, next) {

  con.connect(function (err) {
    con.query("SELECT * FROM login_user", function (err, result, fields) {
      console.log(result[0].login_name);
      // if (result[0].login_name == "srini" && result[0].login_name == "srini") {
        db.login.find(function (err, login) {
          res.json(login);
        });
      // }
      // else {
        console.info(status[500]);
        res.status(400)
        res.send("invalid user").end();
        // res.redirect('/')
        
        // console.log("error message", err)
      // }
    });


  });



});


//Get single task
router.get('/login/:id', function (req, res, next) {
  db.login.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, login) {
    if (err) {
      res.send(err);
    }
    res.json(login);
  });
});




//Delete task
router.delete('/login/:id', function (req, res, next) {
  db.login.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, login) {
    if (err) {
      res.send(err);
    }
    res.json(login);
  });
});

module.exports = router;