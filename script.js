let currentInput = '';
let currentOperator = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

function chooseOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || currentOperator === null) return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Erreur';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    updateScreen();
}

function clearScreen() {
    currentInput = '';
    previousInput = '';
    currentOperator = null;
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').value = currentInput || '0';
}
