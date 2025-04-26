const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number of which you want the factorial : "));

let fact = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};

console.log(`The factorial of ${n} is ${fact(n)}`);
