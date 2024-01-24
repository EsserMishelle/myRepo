const express = require("express");
const app = express();
const port = 3030;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

//trying rendering method
// app.get("/", (req, res) => {
//   res.render("Trying rendering");
// });

app.get("/", (req, res) => {
  const number_of_bottles = 99;
  res.send(`
      ${number_of_bottles} Bottles of beer on the wall
      `);
});

app.get("/:number_of_bottles", (req, res) => {
  const { number_of_bottles } = req.params;
  const updateNumber = parseInt(number_of_bottles) - 1;
  res.send(
    `${number_of_bottles} bottles of beer on the wall. <a href ="/${updateNumber}"> Taking 1 down and passing it around.`
  );
});
