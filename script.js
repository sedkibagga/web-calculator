let expression = "";

function appendValue(value) {
  expression += value;
  document.getElementById("result").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = "";
}

function calculateResult() {
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
    expression = result.toString();
  } catch {
    document.getElementById("result").value = "Error";
    expression = "";
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.value += button.getAttribute('data-value');
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key >= 0 && key <= 9 || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
            display.value += key;
        }

        if (key === 'Enter') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        }
    });
});
