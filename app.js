let currentInput = '';
let total = 0;
let lastOperator = '';

function addToDisplay(value) {
    currentInput += value;
    document.getElementById('input').value = currentInput;
}

function operate(operator) {
    if (currentInput === '') return;
    
    // Add the current number to the total
    calculateTotal();
    
    // Store the operator for the next calculation
    lastOperator = operator;
    currentInput = '';
}

function calculateTotal() {
    let currentNumber = parseFloat(currentInput);
    
    if (isNaN(currentNumber)) return;

    if (lastOperator === '+') {
        total += currentNumber;
    } else if (lastOperator === '-') {
        total -= currentNumber;
    } else if (lastOperator === '*') {
        total *= currentNumber;
    } else if (lastOperator === '/') {
        total /= currentNumber;
    } else {
        total = currentNumber; // For the first input without any operator
    }
    
    document.getElementById('total').innerText = total;
    document.getElementById('input').value = '';
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    total = 0;
    lastOperator = '';
    document.getElementById('input').value = '';
    document.getElementById('total').innerText = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('input').value = currentInput;
}
