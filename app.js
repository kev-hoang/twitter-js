var express = require('express');
var app = express();
var morgan = require('morgan');
var router = express.Router();

app.use(morgan('dev'));

app.use(router);

router.get("/", function(req, res){
	res.status(200).send("Hello Patrick! <a href='/news'> News Here </a>");
})

router.get("/news", function(req,res){
	res.status(200).send("No News");
})

app.listen(3000);