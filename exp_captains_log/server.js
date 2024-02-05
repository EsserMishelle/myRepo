/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");

const morgan = require("morgan");
const path = require("path");
// const logs = require("./models/logs.js");
const Log = require("./models/Log.js");
const methodOverride = require("method-override");
/////////////////////////////////////////////
// Create our express app Object Bine express-react-views templating engine
/////////////////////////////////////////////
const app = express();
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function

mongoose.connect(process.env.MONGO_URI);
// mongoose.connection.once("open", () => {
//   console.log("connected to mongo!");
// });    ////---less detailed
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////

app.use(morgan("tiny")); //logging
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(methodOverride("_method"));
app.use(express.static("public")); // serve files from public statically

// app.use((req, res, next) => {
//   console.log("I run for all routes");
//   next();
// });

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("your server is running... better catch it.");
});

////Seed route

app.get("/logs/seed", (req, res) => {
  const startLogs = [
    { title: "Orange", entry: "orange", shipIsBroken: false },
    { title: "Grape", entry: "purple", shipIsBroken: false },
    { title: "Banana", entry: "orange", shipIsBroken: false },
    { title: "Strawberry", entry: "red", shipIsBroken: false },
    { title: "Coconut", entry: "brown", shipIsBroken: false },
  ];
});

// INDUCES

// Index

app.get("/logs", (req, res) => {
  // find all the logs
  Log.find({})
    // render a template after they are found
    .then((logs) => {
      res.render("Index", { logs });
    })
    // send error as json if they aren't
    .catch((err) => {
      console.error(err);
      res.status(400).json({ err });
    });
});

// New

app.get("/logs/new", (req, res) => {
  res.render("New");
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
