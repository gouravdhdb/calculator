let currentInput = '';
let total = 0;
let lastOperator = '';

function addToDisplay(value) {
    currentInput += value;
    document.getElementById('input').value = currentInput;
}

function operate(operator) {
    if (currentInput === '') return;
    if (lastOperator) calculateTotal();

    total = parseFloat(currentInput);
    lastOperator = operator;
    currentInput = '';
}

function calculateTotal() {
    if (currentInput === '') return;
    let currentNumber = parseFloat(currentInput);
    if (isNaN(currentNumber)) return;

    switch (lastOperator) {
        case '+': total += currentNumber; break;
        case '-': total -= currentNumber; break;
        case '*': total *= currentNumber; break;
        case '/': total /= currentNumber; break;
        default: total = currentNumber;
    }

    document.getElementById('total').innerText = total;
    document.getElementById('input').value = '';
    currentInput = '';
    lastOperator = '';
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
