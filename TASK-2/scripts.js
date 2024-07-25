// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else if (['+', '-', '*', '/'].includes(value)) {
                setOperator(value);
            } else {
                appendToDisplay(value);
            }
        });
    });

    function appendToDisplay(value) {
        if (currentInput.includes('.') && value === '.') return;
        currentInput += value;
        updateDisplay(currentInput);
    }

    function setOperator(value) {
        if (currentInput === '' && previousInput === '') return;
        if (currentInput !== '') {
            calculateResult();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculateResult() {
        if (previousInput === '' || currentInput === '') return;
        const result = eval(`${previousInput} ${operator} ${currentInput}`);
        updateDisplay(result);
        currentInput = result;
        previousInput = '';
        operator = '';
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('');
    }

    function updateDisplay(value) {
        display.value = value;
    }
});
