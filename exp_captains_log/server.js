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
const { error } = require("console");
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
    {
      title: "The Second Mudd encounter",
      entry:
        "After having been taken over by an android, the Enterprise has been under way at warp seven for four days. Now we are entering orbit around a planet which has never been charted",
      shipIsBroken: false,
    },

    {
      title: "The Tribble incident",
      entry:
        "Deep Space Station K-7 has issued a priority total disaster emergency call. We can only assume the Klingons have attacked. We're going in armed for battle",
      shipIsBroken: true,
    },

    {
      title: "Planet 892-IV encounter",
      entry:
        "On the surface of planet IV, System 892, we countered a group of runaway slaves. They dwell in caves, wear rags, live under primitive conditions. But they are creatures of a heavily industrialized earth.",
      shipIsBroken: false,
    },

    {
      title: "The Babel Conference",
      entry:
        "We have departed Vulcan for the neutral planetoid named Babel. We have been assigned to transport ambassadors of Federation planets to this important council. The issues of the council are politically complex, the passengers… explosive",
      shipIsBroken: true,
    },

    {
      title: "The Triskelion incident",
      entry:
        "We are entering standard orbit about Gamma II, an uninhabited planetoid with an automatic communications and astrogation station. Ensign Chekov, Lieutenant Uhura, and I will beam down and make a routine check of its facilities",
      shipIsBroken: false,
    },
  ];

  Log.deleteMany({})
    .then((data) => {
      Log.insertMany(startLogs)
        .then((createdLog) => res.redirect("/logs"))
        .catch((err) => {
          console.error(err);
          res.status(400).json({ error });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ error });
    });
});

///if we don't want a total reset, but simply insert many records, then---
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

// INDUCES

//// Index
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

//// New
app.get("/logs/new", (req, res) => {
  res.render("New");
});

////Delete
app.delete("/logs/:id", (req, res) => {
  Log.deleteOne({ _id: req.params.id })
    .then((deleteInfo) => {
      console.log(deleteInfo);
      res.redirect("/logs");
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
});

////Update
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  }

  Log.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((updateInfo) => {
      console.log(updateInfo);
      res.redirect(`/logs/${req.params.id}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
});
//// Create

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  }

  Log.create(req.body)
    .then((createdLog) => {
      res.redirect("/Show");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

////Edit
app.get("/logs/:id/edit", (req, res) => {
  Log.findOne({ _id: req.params.id })
    .then((foundLog) =>
      res.render("Edit", {
        log: foundLog,
      })
    )
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});
///Show
app.get("/logs/:id", (req, res) => {
  Log.findOne({ _id: req.params.id })
    .then((foundLog) => {
      res.render("Show", {
        log: foundLog,
      });
    })
    .catch((error) => {
      error(error);
      res.json({ error });
    });
});
//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
