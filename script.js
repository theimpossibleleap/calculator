let numbers = [];

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

const numDivs = 20;
const container = document.getElementById("container");

for (i = 0; i <= numDivs; i++) {
    let div = document.createElement("div");
    
    div.setAttribute("id", "calcDiv"+i);
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.backgroundColor = "black";
    div.style.borderColor = "white";
    div.style.margin = '2px';
    div.style.color = 'white';
    while (i < 10)

    container.appendChild(div);
};