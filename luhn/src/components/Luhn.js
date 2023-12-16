import { useState, useEffect } from "react";
// import Form from "./components/Form";

export default function Luhn(props) {
  let { creditStr, email } = props;
  const [valid, setValid] = useState(true);

  let sum = 0;

  useEffect(() => {
    console.log("The credit card number can be validated: ", valid);
  }, [valid]);
  //samething as the other code
  // num = num.toString().split("").reverse();
  // console.log(num);
  // for (let i = num.length - 1; i >= 0; i--) {
  //   if (i % 2 === 0) {
  //     num[i] = Number(num[i]) * 2;
  //   } else {
  //     num[i] = num[i];
  //   }
  // console.log(num);
  // }

  const validate = () => {
    //creditStr is delimited then re-arranged in a reverse way
    creditStr = creditStr.split("").reverse();
    // console.log(creditStr); ////double-checking
    //initialized an empty array/stack
    let newStr = [];
    //iterating the creditStr digit by digit using map
    creditStr.map((digit, i, arr) => {
      //if the array index is odd number such as 1, 3, 5,
      if (i % 2 === 1) {
        //we will convert it to number then double that digit
        arr[i] = Number(arr[i] * 2);
        //after it's doubled, if it's < 10, push it into the new stack
        //otherwise, push the remainer of it modulus 10, then push 1
        arr[i] < 10 ? newStr.push(arr[i]) : newStr.push(arr[i] % 10, 1);
      } else {
        //if the array index is even, convert it to a number type
        arr[i] = Number(arr[i]);
        //push it into the stack
        newStr.push(arr[i]);
      }
      //return this new array newStr, it should be an array of number type
      return newStr;
    });

    // console.log(newStr);//double checking

    newStr = newStr.reverse(); //reverse the order again to how it's supposed to be
    // console.log(newStr);//double checking
    //summing all the digits using reduce method
    sum = newStr.reduce((a, b) => a + b);
    //return true if divisible by 10, else false
    setValid(
      sum % 10 === 0 ? console.log("It is true") : console.log("It is false")
    );
    return valid;
  };

  return (
    <>
      <h1>{validate()}</h1>
    </>
  );

  // {/* console.log(Luhn(4408041234567893)); //should be true
  // console.log(Luhn(1234567890123456)); //false
  // console.log(Luhn(38520000023237)); //should be true
  // console.log(Luhn(4222222222222)); //should be true */}
}
