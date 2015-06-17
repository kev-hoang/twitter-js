var express = require('express');
var app = express();
var morgan = require('morgan');
var router = express.Router();
var swig  = require('swig');

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(morgan('dev'));

app.use(router);

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');

swig.setDefaults({ cache: false});

router.get("/", function(req, res){
	res.render( 'index', {title: 'Hall of Fame', people: people} );
})

router.get("/news", function(req,res){
	res.status(200).send("No News");
})


app.listen(3000);