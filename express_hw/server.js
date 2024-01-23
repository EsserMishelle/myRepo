const express = require("express");
const app = express();
const port = 3020;
// const magic8balls = require("./model/magic8balls");

const magic8balls = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

app.get("/greeting", (req, res) => {
  res.send("Hello stranger");
});

app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  res.send("Wow, Hello There, " + req.params.name + " Good to see you!");
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const { total, tipPercentage } = req.params;
  console.log(req.params);

  const totalAmount = parseFloat(total);
  const tipPercentageValue = parseFloat(tipPercentage);

  const tip = (totalAmount * tipPercentageValue) / 100;
  res.send(
    `The tip of total bill of ${totalAmount} with the tipping percentage ${tipPercentageValue}% is $${tip}`
  );
});

app.get("/magic/:question", (req, res) => {
  const question = req.params.question.replace(/%20/g, " "); //got this from chat

  const ranNum = Math.floor(Math.random() * magic8balls.length);
  const answer = magic8balls[ranNum];

  // Send the magic 8 ball response between html <h1> tags
  res.send(`<h2>${question}</h3><h3>${answer}</h3>`);
});
