const express = require("express");
const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
//if there's more moduels, then js needs to specify
const vegetables = require("./models/vegetables.js");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// app.get("/fruits/", (req, res) => {
//   res.send(fruits);
// });

// app.get("/fruits/:indexOfFruitsArray", (req, res) => {
//   res.send(fruits[req.params.indexOfFruitsArray]);
// });

// app.render("Show", {
//   fruit: fruits[req.params.indexOfFruitsArray],
// });

// app.get("/fruits", function (req, res) {
//   res.render("Show", { fruits: fruits });
// });

// app.get("/fruits/:indexOfFruitsArray", function (req, res) {
//   res.render("Index", {
//     //second param must be an object
//     fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//   });
// });

app.use(express.urlencoded({ extended: false }));
//middleware -- ex checking to see if user is logged in (function in your route)
app.use((req, rest, next) => {
  console.log("I run for all routes");
  next();
});

////INDUCES

//index
//index page for fruit
app.get("/fruits", function (req, res) {
  res.render("./fruits/Index", { fruits: fruits });
});
//index page for veg
app.get("/vegetables", function (req, res) {
  res.render("./vegetables/Index.jsx", { vegetables: vegetables });
});

//New

app.get("/fruits/new", (req, res) => {
  res.render("./fruits/New");
});

app.get("/vegetables/new", (req, res) => {
  res.render("./vegetables/New");
});
//Delete

//Update

//create

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);

  res.redirect("./fruits");
  // res.send("data received");
});

app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  vegetables.push(req.body);
  console.log(vegetables);

  res.redirect("./vegetables");
});

// app.post("/fruits", (req, res) => {
//   res.send("hi");
// });

// EDIT

//Show
// createImageBitmap; //Edit
app.get("/fruits/:indexOfFruitsArray", function (req, res) {
  res.render("./fruits/Show", {
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

app.get("/vegetables/:indexOfVegetablesArray", function (req, res) {
  res.render("./vegetables/Show", {
    vegetables: vegetables[req.params.indexOfVegetablesArray],
  });
});

app.listen(3070, function () {
  console.log("Listening on port 3070");
});
