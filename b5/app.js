var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var expressLayouts = require("express-ejs-layouts");
const { connect } = require("./src/apps/const/config/db.js");

const flash = require('express-flash-notification');
const session = require('express-session');

var app = express();
connect();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "admin");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: 'www',
  resave: false,
  saveUninitialized: true,
}));


app.use(
  flash(app, {
    viewName: "./admin/elements/flash",
  })
);

app.use("/", require("./src/routes"));

app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
