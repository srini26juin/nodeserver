var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var index = require('./routes/index');
// var login = require('./routes/login');



var mysql = require('mysql');

var app = express();

// app.use("/*", function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
  
//     // Pass to next layer of middleware
//     next();
//   });


const port = process.env.PORT || 4000   ;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', index);
// app.use('/api', login);

app.listen(port, function(){
   console.log("server running");
   
});