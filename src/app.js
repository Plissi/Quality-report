
let sqlite3 = require('sqlite3').verbose();
let express = require('express');
let http = require('http');
let path = require("path");
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");

var app = express();
var server = http.createServer(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


var db = new sqlite3.Database('./database/employees.db');


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());
app.use(limiter);

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./public/form.html'));
  });