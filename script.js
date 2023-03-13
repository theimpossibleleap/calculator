let numbers = [];
let addResult = 0;

numbers.push(Number(prompt("Please choose your first number.")));
numbers.push(Number(prompt("Please choose your second number.")));

function add() {
    addResult = numbers[0] + numbers[1];
    return addResult;
}

add();

console.log(addResult);