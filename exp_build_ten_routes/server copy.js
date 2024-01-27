const express = require("express");
const events = require("./models/events.js");
const app = express();
// const Show = require("./path/to/Show.jsx"); // Change the path accordingly

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));
app.use((req, rest, next) => {
  console.log("I run for all routes");
  next();
});

////Induces
//index
app.get("/events", function (req, res) {
  res.render("Index", { events: events });
});
//new
app.get("/events/new", (req, res) => {
  res.render("New");
});
app.get("/home", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.send("This is fun to create a airbnb page");
});
app.get("/newowner", (req, res) => {
  res.send("New owner's page");
});
app.get("/sponsors", (req, res) => {
  res.send("Sponsor's new page");
});
app.get("/otherlinks", (req, res) => {
  res.send("Other links");
});
app.get("/comments", (req, res) => {
  res.send("Please be kind with your comments");
});
app.get("/weather", (req, res) => {
  res.send("Go visit BAM.weather.netlify.com");
});
app.get("/discounts", (req, res) => {
  res.send("Discount page");
});
app.get("/map", (req, res) => {
  res.send("maps.www.com");
});

//Delete

//Update

//create

app.post("/events", (req, res) => {
  events.push(req.body);
  console.log(events);
  res.redirect("/events");
});
//edit
//show
app.get("/events/:indexOfEventsArray", function (req, res) {
  res.render("Show", {
    event: events[req.params.indexOfEventsArray], //
  });
});

app.listen(3080, () => {
  console.log("listening to port 3080");
});
