const readline = require('readline-sync');

function start() {
  //Data input 
  const number1 = parseInt(readline.question('Enter first number: '));
  const number2 = parseInt(readline.question('Enter second number: '));
  const result = find(number1, number2);
  console.log(result);
}

//Algorithm Euclid's 
function find(number1, number2) {
  while (number2 !== 0) {
    let temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
}

start();
