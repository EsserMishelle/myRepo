const express = require("express");
const app = express();
const port = 3020;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
//redner, redirect, json, status are most neeed

// const greeting=[

// ]
app.get("/greeting", (req, res) => {
  res.send("Hello stranger");
});

app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  res.send("Wow, Hello There, " + req.params.name + " Good to see you!");
});
