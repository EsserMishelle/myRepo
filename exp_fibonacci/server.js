//fibonacci function
const express = require("express");
const app = express();

//create a func to see if it is a square number or not
function isSquare(num) {
  const sqrtNum = Math.sqrt(num);
  return sqrtNum % 1 === 0; //works if I use parseFloat in myNum = parseFloat

  //   //   return Number.isInteger(sqrtNum);
  //   //   return sqrtNum === Math.round(sqrtNum);
}

//better solution---fault proof
// Function to check if a number is a perfect square
// function isPerfectSquare(num) {
//   const sqrt = Math.sqrt(num);
//   return sqrt * sqrt === num;
// }

function isFib(num) {
  return isSquare(5 * num * num + 4) || isSquare(5 * num * num - 4);
}

app.get("/fibonacci/:number", (req, res) => {
  const myNum = parseFloat(req.params.number);
  if (isNaN(myNum)) {
    res.send("Please provide a valid number");
  } else if (isFib(myNum)) {
    res.send(`Very good. ${myNum} is Fibonacci.`);
  } else {
    res.send("I can tell this is not a Fibonacci number.");
  }
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Sever is listening to port ${port}`);
});

// Function to check if a number is a perfect square
// function isPerfectSquare(num) {
//   const sqrt = Math.sqrt(num);
//   return sqrt * sqrt === num;
// }

// // Function to check if a number is a Fibonacci number
// function isFibonacci(num) {
//   return (
//     isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
//   );
// }

// app.get("/fibonacci/:number", (req, res) => {
//   const inputNumber = parseInt(req.params.number);

//   if (isNaN(inputNumber)) {
//     res.send("Invalid input. Please provide a valid number.");
//   } else if (isFibonacci(inputNumber)) {
//     res.send("Very good. It is Fibonacci.");
//   } else {
//     res.send("I can tell this is not a Fibonacci number.");
//   }
// });

// const PORT = process.env.PORT || 3030;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
