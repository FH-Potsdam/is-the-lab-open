var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var hbs = require('express-hbs');
var routes = require('./routes');
var compression = require('compression');
// var allergene = require('./routes/allergene');
// var favicon = require('serve-favicon');
// var cookieParser = require('cookie-parser');

var port = 4442;

var app = express();
// compress with gzip
app.use(compression());
// view engine setup
app.set('port', process.env.PORT || port);
app.set('view engine', 'hbs');

app.engine('hbs', hbs.express4({
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));

app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.json());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

if('development' == app.get('env')){
  app.use(errorHandler());
}

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.get('/', routes.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// module.exports = app;

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});