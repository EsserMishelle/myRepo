const express = require("express");
const pokemon = require("./models/pokemon");

const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));
//middleware -- ex checking to see if user is logged in (function in your route)
app.use((req, rest, next) => {
  console.log("I run for all routes");
  next();
});

////INDUCES

//Index --index for pokemon

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//send user to pokemon path --earlier execerise
// app.get("/pokemon/", (req, res) => {
//   res.send(pokemon);
// });

//changed it to use Index
app.get("/pokemon", function (req, res) {
  res.render("Index", { pokemon: pokemon });
});

////INDUCES

// //New

// //Delete

// //Update

// //create

// // EDIT

// //Show
app.get("/pokemon/:id", function (req, res) {
  res.render("Show", {
    pokeItem: pokemon[req.params.id],
  });
});

app.listen(3080, function () {
  console.log("Listening on port 3080");
});
