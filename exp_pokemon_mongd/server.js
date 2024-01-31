require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const pokemon = require("./models/pokemon");
const Poke = require("./models/Poke.js");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI); ///don't worry about the options-deprecated
// Connect to Mongo -- with options
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// mongoose.connection.once("open", () => {
//   console.log("connected to mongo!");
// });
mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB:", err);
});

//express server
app.use(express.urlencoded({ extended: false }));
// //middleware -- ex checking to see if user is logged in (function in your route)
app.use((req, rest, next) => {
  console.log("I run for all routes");
  next();
});

////INDUCES

//Index --index for pokemon

///first exercise
// app.get("/", (req, res) => {
//   res.send("Welcome to the Pokemon App!");
// });

app.get("/pokemon", (req, res) => {
  Poke.find({})
    .then((allPokes) => {
      res.render("Index", { pokemon: allPokes });
    })
    .catch((err) => console.error(err));
});
//send user to pokemon path --earlier execerise
// app.get("/pokemon/", (req, res) => {
//   res.send(pokemon);
// });

//changed it to use Index
// app.get("/pokemon", function (req, res) {
//   res.render("Index", { pokemon: pokemon });
// });

////INDUCES
// //----New

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

////Create
app.post("/pokemon", (req, res) => {
  Poke.create(req.body)
    .then((createdPoke) => {
      res.redirect("/pokemon");
    })
    .catch((err) => console.error(err));
});

// const myFirstPoke = {
//   name: "bulbasaur",
//   img: "http://img.pokemondb.net/artwork/bulbasaur",
// };

////----adding 1st pokemon--bulbasaur
// Poke.create(myFirstPoke)
//   .then((poke) => {
//     console.log(poke);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// const manyPokes = [
//   { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
//   { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
//   { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
//   { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
//   { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
//   { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
//   { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
// ];

////----adding 7 records including Bulbasaur (again)
// Poke.insertMany(manyPokes)
//   .then((pokes) => {
//     console.log(pokes);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     db.close();
//   });

////---I adding all 7 records 2 times so we have to delete them
////---- Delete
// Poke.deleteOne({ name: "bulbasaur" })
//   .then((deleteInfo) => {
//     console.log(deleteInfo);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// //Update -- not done
// Poke.updateOne(
//   {
//     img: "pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki?file=025Pikachu_Pokemon_Colosseum",
//   },
//   {
//     img: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Free-download-Pikachu-wallpaper-HD",
//   }
// );

// //create

// // EDIT

// //Show
// app.get("/pokemon/:id", function (req, res) {
//   res.render("Show", {
//     pokeItem: pokemon[req.params.id],
//   });
// });
////Show---mongo
app.get("/pokemon/:id", (req, res) => {
  Poke.findOne({ _id: req.params.id })
    .then((foundPoke) => {
      res.render("Show", {
        pokeItem: foundPoke,
      });
    })
    .catch((err) => console.error(err));
});

app.listen(3030, function () {
  console.log("Listening on port 3030");
});
