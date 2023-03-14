let numbers = [];
let numberList = [];

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

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);

    key.classList.add('calcHit');

    function removeTransition(e) {
        if (e.propertyName !== 'color') return;
        this.classList.remove('calcHit');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    numberList.push(e.key);

    const numDisplay = document.querySelector('#numDisplay');

    numDisplay.textContent = numberList.join('');

    console.log(numberList)

});