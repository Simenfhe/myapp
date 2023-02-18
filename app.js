var createError = require('http-errors');
var express = require('express');
var path = require('path');

const PORT = process.env.WEBSERVER_PORT || 9999

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req,res) => {
  res.render("index")
})

app.get("/orjan", (req,res) => {
  res.render("orjan")
})

app.get("/simen", (req,res) => {
  res.render("simen")
})

module.exports = app;

app.listen(PORT, () => {
  console.log(`server listening at port:${PORT}`)
})
