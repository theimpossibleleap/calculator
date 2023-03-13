let numbers = [];



let numOne = document.querySelector("#numOne").value;
let numTwo = document.querySelector("#numTwo").value;

numOne.push(numbers);
numTwo.push(numbers);

/* numbers.push(Number(prompt("Please choose your first number.")));
numbers.push(Number(prompt("Please choose your second number."))); */

function add() {
    addResult = numbers[0] + numbers[1];
    return addResult;
}

function subtract() {
    subResult = numbers[0] - numbers[1];
    return subResult;
}

function multiply() {
    multResult = numbers[0] * numbers[1];
    return multResult;
}

function divide() {
    divideResult = numbers[0] / numbers[1];
    return divideResult;
}

console.log(`
Addition: ${numbers[0]} + ${numbers[1]} = ${add()}
Subtraction: ${numbers[0]} - ${numbers[1]} = ${subtract()}
Multiplication: ${numbers[0]} x ${numbers[1]} = ${multiply()}
Division: ${numbers[0]} / ${numbers[1]} = ${divide()}
`);

