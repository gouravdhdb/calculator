let currentInput = '';
let total = 0;
let lastOperator = '';
let history = [];

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

    // Perform the operation
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

    // Add the full calculation to history (including the operator and result)
    if (lastOperator) {
        history.push(`${history[history.length - 1]} ${currentInput} = ${total}`);
    } else {
        history.push(`${currentInput} = ${total}`);
    }

    updateHistoryDisplay();

    // Update the total and reset the input
    document.getElementById('total').innerText = total;
    document.getElementById('input').value = '';
    currentInput = '';
}

function updateHistoryDisplay() {
    let historyHTML = '';
    for (let i = history.length - 1; i >= 0; i--) {
        historyHTML += `<div>${history[i]}</div>`;
    }
    document.getElementById('history').innerHTML = historyHTML;
}

function clearDisplay() {
    currentInput = '';
    total = 0;
    lastOperator = '';
    history = [];
    document.getElementById('input').value = '';
    document.getElementById('total').innerText = '0';
    document.getElementById('history').innerHTML = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('input').value = currentInput;
}
