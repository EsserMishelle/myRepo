require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const fruits = require("./models/fruits.js");
const Fruit = require("./models/Fruit.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
//if there's more moduels, then js needs to specify

const vegetables = require("./models/vegetables.js");
const Vegetable = require("./models/Vegetable.js");
const port = 3010;

app.use(express.static("public"));

// const path = require("path"); // Import the 'path' module
// app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' folder

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
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

//Seed (fruits) route
app.get("/fruits/seed", (req, res) => {
  Fruit.insertMany([
    {
      name: "grapefruit",
      color: "pink",
      readyToEat: true,
    },
    {
      name: "grape",
      color: "purple",
      readyToEat: false,
    },
    {
      name: "avocado",
      color: "green",
      readyToEat: true,
    },
  ])
    .then((createdFruits) => res.redirect("/fruits"))
    .catch((err) => console.error(err));
});

app.get("/vegetables/seed", (req, res) => {
  Vegetable.insertMany([
    {
      name: "cucumber",
      color: "pink",
      readyToEat: false,
    },
    {
      name: "lettuce",
      color: "purple",
      readyToEat: false,
    },
    {
      name: "yellow pepper",
      color: "green",
      readyToEat: true,
    },
  ])
    .then((createdVegetables) => res.redirect("/vegetables"))
    .catch((err) => console.error(err));
});

//-----------------------------------------

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

app.delete("/fruits/:id", (req, res) => {
  Fruit.deleteOne({ _id: req.params.id })
    .then((deleteInfo) => {
      console.log(deleteInfo);
      res.redirect("/fruits");
    })
    .catch((err) => console.error(err));
});

app.delete("/vegetables/:id", (req, res) => {
  Vegetable.deleteOne({ _id: req.params.id })
    .then((deleteInfo) => {
      console.log(deleteInfo);
      res.redirect("/vegetables");
    })
    .catch((err) => console.error(err));
});

// app.post("/vegetables/:id/delete", (req, res) => {
//   const vegetableId = req.params.id;

//   Vegetable.deleteOne({ _id: vegetableId })
//     .then(() => {
//       res.redirect("/vegetables"); // Redirect to the vegetables index page
//     })
//     .catch((err) => console.error(err));
// });

//UPDATE
//using code --for client side
app.put("/fruit/:id", (req, res) => {
  if (req.body.color) {
    Fruit.updateOne({ _id: req.params.id }, { $set: { color: req.body.color } })
      .then((updateInfo) => {
        console.log(updateInfo);
        res.redirect(`/fruits/${req.params.id}`);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(400).send("color is a required input for the update");
  }
});

//UPDATE uisng EDIT form
app.put("/fruits/:id", (req, res) => {
  //lesson code
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.updateOne({ _id: req.params.id }, req.body)
    .then((updateInfo) => {
      console.log(updateInfo); // Fix typo here
      res.redirect(`/fruits/${req.params.id}`);
    })
    .catch((err) => console.error(err));
});

app.put("/vegetables/:id", (req, res) => {
  //lesson code
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Vegetable.updateOne({ _id: req.params.id }, req.body)
    .then((updateInfo) => {
      console.log(updateInfo); // Fix typo here
      res.redirect(`/vegetables/${req.params.id}`);
    })
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
app.get("/fruits/:id/edit", (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) =>
      res.render("./fruits/Edit", {
        fruit: foundFruit,
      })
    )
    .catch((err) => console.error(err));
});

app.get("/vegetables/:id/edit", (req, res) => {
  Vegetable.findOne({ _id: req.params.id })
    .then((foundVegetable) =>
      res.render("./vegetables/Edit", {
        vegetable: foundVegetable,
      })
    )
    .catch((err) => console.error(err));
});

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

app.get("/vegetables/:id", (req, res) => {
  const vegetableId = req.params.id;

  Vegetable.findOne({ _id: vegetableId })
    .then((foundVegetable) => {
      res.render("./vegetables/Show", {
        vegetable: foundVegetable,
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

Fruit.countDocuments({ readyToEat: false })
  // Fruit.countDocuments({ } ) ////---all documents
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    Fruit.db.close();
  });

//---listening to port
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
