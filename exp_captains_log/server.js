//if we don't want a total reset, but simply insert many records, then---
//////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const { error } = require("console");

// Import models, controllers, routes, and seed data
// const logs = require("./models/logs.js");
const Log = require("./models/Log.js");
const logsController = require("./controllers/logs.jsx"); ////new
const logsRouter = require("./routes/logs.jsx"); ////new
const seedData = require("./seedData.jsx"); ////new

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

/////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////

////////////////////////////////////////////
// Controller Routes
////////////////////////////////////////////
app.use("/logs", logsRouter);
// app.use("/logs", logsController); --duplicated from logsRuter

////////////////////////////////////////////
// Seed Route- (only use once a while for testing to C if dbase is seeded)
////////////////////////////////////////////

//Chat
function seedLogs(req, res, next) {
  Log.deleteMany({})
    .then(() => Log.insertMany(seedData.startLogs))
    .then(() => res.redirect("/logs"))
    .catch(next); // Pass errors to the error handling middleware
}
app.get("/logs/seed", seedLogs);

//Devin--
// app.get("/logs/seed", (req, res) => {
//   Log.deleteMany({})
//     .then((data) => {
//       Log.insertMany(seedData.startLogs)
//         .then((createdLog) => res.redirect("/logs"))
//         .catch((err) => {
//           console.error(err);
//           res.status(400).json({ error });
//         });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(400).json({ error });
//     });
// });

////insert from server.js
// app.get("/logs/seed", (req, res) => {
//   Log.insertMany([
//     {
//       title: "Android",
//       entry: "Android attacked us",
//       shipIsBroken: true,
//     },
//     {
//       name: "Planet apes",
//       entry: "Apes are super-intelligent city dwellers",
//       shipIsBroken: false,
//     },
//     {
//       name: "Ambassadors",
//       entry: "Explosive passengers attacking ambassadors",
//       shipIsBroken: true,
//     },
//   ])
//     .then((createdLogs) => res.redirect("/logs"))
//     .catch((err) => console.error(err));
// });

////////////////////////////////////////////
// Main Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("your server is running... better catch it.");
});

////////////////////////////////////////////
// Error handling middleware
////////////////////////////////////////////
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
