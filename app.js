var express = require('express');
var app = express();
var morgan = require('morgan');
var swig  = require('swig');
var routes = require('./routes/');
var socketio = require('socket.io');

var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io));

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');

swig.setDefaults({ cache: false});




