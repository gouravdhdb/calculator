let currentInput = '';
let total = 0;
let lastOperator = '';

function addToDisplay(value) {
    currentInput += value;
    document.getElementById('input').value = currentInput;
}

function operate(operator) {
    if (currentInput === '') return;

    if (lastOperator) {
        calculateTotal();
    }
    
    total = parseFloat(currentInput);
    lastOperator = operator;
    currentInput = '';
}

function calculateTotal() {
    if (currentInput === '') return;
    
    let currentNumber = parseFloat(currentInput);
    if (lastOperator === '+') {
        total += currentNumber;
    } else if (lastOperator === '-') {
        total -= currentNumber;
    } else if (lastOperator === '*') {
        total *= currentNumber;
    } else if (lastOperator === '/') {
        total /= currentNumber;
    }

    document.getElementById('total').innerText = total;
    currentInput = '';
    lastOperator = '';
    document.getElementById('input').value = '';
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('input').value = '';
    lastOperator = '';
    total = 0;
    document.getElementById('total').innerText = total;
}
