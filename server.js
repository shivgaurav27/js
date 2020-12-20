const express = require("express");
const hbs = require("hbs");

var app = express();
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}:${req.method} ${req.url}`);
  next();
});

app.set("view engine", "hbs");
app.get("/", (req, res) => {
  // res.send("<h1>Hello express</h1>");
  res.render("home.hbs", {
    pageTitle: "Home- page",
    welcomeMessage: "Welcome to mywebsite",
    currentYear: new Date().getFullYear(),
  });
});

app.get("/about", (req, res) => {
  // res.send("About");
  res.render("about.hbs", {
    pageTitle: "About- page",
    currentYear: new Date().getFullYear(),
  });
});

app.get("/home", (req, res) => {
  // res.send("About");
  res.render("home.hbs", {
    pageTitle: "Home- page",
    welcomeMessage: "Welcome to mywebsite",
    currentYear: new Date().getFullYear(),
  });
});

//bad - send back json errorMessage
app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "unable to send message",
  });
});
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
