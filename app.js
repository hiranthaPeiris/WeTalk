var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const Joi = require('joi');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next){
  res.io = io;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//listen to every connection
io.on('connection', function (socket) {
  console.log("new Connection");

  //Handle a chat event 
  socket.on('chat',function (data) {
    console.log(data);
    var rst = validationMessage(data);
    if(rst.error){
      console.log("fields empty");
    }else{
      io.sockets.emit('chat',data);
      console.log("messeage emited");
    }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function validationMessage(data){
  const schema = {
    message :Joi.string().required(),
    handle : Joi.string().required()
  };
  var rst= Joi.validate(data,schema);
  return rst;
}

module.exports = {app: app, server: server};
