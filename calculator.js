//basic calculator in the terminal 

const prompt = require("prompt-sync")();

let operation = prompt("choose an operation: +, -, /, multiply, exponent, squareRoot: ").toLowerCase();
if (operation === 'squareroot') {
    console.log("do not add a comma");
} else if (operation === 'exponent') {
    console.log("only two entries accepted. Eg 10, 5 which means 10 exponent 5.")
}

let inputNumber = prompt('enter number(s) separated by a comma(,): ');
let stringArray = inputNumber.split(","); //split inputNumber to an array of strings
let numberArray = stringArray.map(Number);   //convert stringArray into numberArray

switch (operation) {
    case '+':
        let sum = 0;
        numberArray.map(number => sum += number);
        console.log(`\nThe result = ${sum}`);
        break;
    case 'multiply':
        let multiply = 1;
        numberArray.map(number => multiply *= number);
        console.log(`\nThe result = ${multiply}`);
        break;
    case '/':
        const divide = (accumulator, number) => accumulator / number;
        const division = numberArray.reduce(divide);
        console.log(`\nThe result = ${division}`);
        break;
    case '-':
        const subtract = (accumulator, number) => accumulator - number;
        const subtraction = numberArray.reduce(subtract);
        console.log(`\nThe result = ${subtraction}`);
        break;  
    case 'exponent':
        console.log("example : 10,5 that is 10 exponent 5");
        const power = (accumulator, number) => accumulator ** number;
        const exponent = numberArray.reduce(power);
        console.log(`\nThe result = ${exponent}`);
        break;
    case 'squareroot':
        const squareRoot = Math.sqrt(Number(inputNumber));
        console.log(`\nThe result = ${squareRoot}`);
        break;
    default:
        console.log("Enter a valid operation");
        break;
}





 




