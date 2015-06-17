var express = require('express');
var app = express();
var morgan = require('morgan');
var swig  = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(morgan('dev'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');

swig.setDefaults({ cache: false});




app.listen(3000);