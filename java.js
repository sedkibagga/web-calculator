// Sélection des éléments nécessaires
const screen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');

// Variables pour stocker l'état de la calculatrice
let currentInput = '0';
let previousInput = '';
let operator = '';

// Met à jour l'écran
function updateScreen(value) {
    screen.value= value;
}

// Réinitialise la calculatrice
function clearAll() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateScreen(currentInput);
}

// Gère l'entrée des chiffres
function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
}

// Ajoute un point décimal
function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

// Gère les opérateurs
function handleOperator(nextOperator) {
    if (operator && currentInput === '') return;

    if (previousInput === '') {
        previousInput = currentInput;
    } else if (operator) {
        const result = performCalculation();
        currentInput = result.toString();
        previousInput = currentInput;
    }

    operator = nextOperator;
    currentInput = '';
}

// Effectue les calculs
function performCalculation() {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return '';

    switch (operator) {
        case '+':
            return prev + current;
        case '-':
            return prev - current;
        case '*':
            return prev * current;
        case '/':
            return prev / current;
        default:
            return current;
    }
}

// Gère le calcul final
function calculate() {
    if (operator === '') return;
    const result = performCalculation();
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateScreen(currentInput);
}

// Ajout des événements aux boutons
keys.addEventListener('click', (event) => {
    const { target } = event;

    // Ignorer si ce n'est pas un bouton
    if (!target.matches('button')) return;

    const value = target.value;

    switch (value) {
        case 'all-clear':
            clearAll();
            break;
        case '=':
            calculate();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '.':
            inputDecimal();
            updateScreen(currentInput);
            break;
        default:
            inputDigit(value);
            updateScreen(currentInput);
    }
});

