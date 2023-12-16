// import { useState, useEffect } from "react";

// export default function Luhn({creditStr}) {
export default function Luhn(num) {
  let sum = 0;
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
  num = num.toString().split("").reverse();
  console.log(num);
  let newNum = [];
  num.map((digit, i, arr) => {
    if (i % 2 === 1) {
      arr[i] = Number(arr[i] * 2);
      // newNum.push(
      //   Number(arr[i] % 10),
      //   arr[i] >= 10 ? Number(Math.floor(arr[i] / 10)) : null,
      arr[i] < 10 ? newNum.push(arr[i]) : newNum.push(arr[i] % 10, 1);
    } else {
      arr[i] = Number(arr[i]);
      newNum.push(arr[i]);
    }
    return newNum;
  });
  console.log(newNum);

  newNum = newNum.reverse();
  console.log(newNum);
  sum = newNum.reduce((a, b) => a + b);
  console.log(sum);
  return sum % 10 === 0 ? true : false;
  // return sum;
}

console.log(Luhn(4408041234567893)); //should be true
console.log(Luhn(1234567890123456)); //false
console.log(Luhn(38520000023237)); //should be true
console.log(Luhn(4222222222222)); //should be true

// Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
// Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
// Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
// Step 3:  70 % 10 == 0
