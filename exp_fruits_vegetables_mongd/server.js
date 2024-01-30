require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const fruits = require("./models/fruits.js");
const Fruit = require("./models/Fruit.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
//if there's more moduels, then js needs to specify
const vegetables = require("./models/vegetables.js");
const Vegetable = require("./models/Vegetable.js");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true,
// });
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once("open", () => {
  console.log("connected to mongod");
});

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

////INDUCES
//index
//index page for fruit

app.get("/fruits", (req, res) => {
  Fruit.find({})
    .then((allFruits) => {
      res.render("./fruits/Index", { fruits: allFruits });
    })
    .catch((err) => console.error(err));
});

//index page for veg
app.get("/vegetables", (req, res) => {
  Vegetable.find({})
    .then((allVegetables) => {
      res.render("./vegetables/Index", { vegetables: allVegetables });
    })
    .catch((err) => console.error(err));
});

//New
app.get("/fruits/new", (req, res) => {
  res.render("./fruits/New");
});

app.get("/vegetables/new", (req, res) => {
  res.render("./vegetables/New");
});

//Delete
app.post("/fruits/:id/delete", (req, res) => {
  const fruitId = req.params.id;

  Fruit.deleteOne({ _id: fruitId })
    .then(() => {
      res.redirect("./fruits/Index"); // Redirect to the fruits index page
    })
    .catch((err) => console.error(err));
});

app.post("/vegetables/:id/delete", (req, res) => {
  const vegetableId = req.params.id;

  Vegetable.deleteOne({ _id: vegetableId })
    .then(() => {
      res.redirect("/vegetables"); // Redirect to the vegetables index page
    })
    .catch((err) => console.error(err));
});

//Update
app.post("/fruits/:id/update", (req, res) => {
  const fruitId = req.params.id;
  const updatedData = req.body;

  Fruit.updateOne({ _id: fruitId }, updatedData)
    .then((allFruits) => {
      res.render("./fruits/Index", { fruits: allFruits });
    })
    //   res.render("./fruits/${fruitId}");
    // })
    .catch((err) => console.error(err));
});

//create

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect("./fruits");
    })
    .catch((err) => console.error(err));
});

app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Vegetable.create(req.body)
    .then((createdVegetable) => {
      res.redirect("./vegetables");
    })
    .catch((err) => console.error(err));
});
// app.post("/fruits", (req, res) => {
//   res.send("hi");
// });

// EDIT
//

//find
app.get("/fruits/:id", (req, res) => {
  const fruitId = req.params.id;

  Fruit.findOne({ _id: fruitId })
    .then((foundFruit) => {
      res.render("./fruits/Show", {
        fruit: foundFruit,
      });
    })
    .catch((err) => console.error(err));
});

//Show
// createImageBitmap; //Edit

//Show
app.get("/fruits/:id", (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render("./fruits/Show", {
        fruit: foundFruit,
      });
    })
    .catch((err) => console.error(err));
});

app.get("/vegetables/:id", (req, res) => {
  Vegetable.findOne({ _id: req.params.id })
    .then((foundVegetable) => {
      res.render("./vegetables/Show", {
        vegetable: foundVegetable,
      });
    })
    .catch((err) => console.error(err));
});

app.listen(3010, function () {
  console.log("Listening on port 3010");
});
