const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    if (awaitingNextValue) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}


inputBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            console.log('operator', button.textContent);
            return;
        }
        if (button.classList.contains('decimal')) {
            console.log('decimal', button.textContent);
            addDecimal();
            return;
        }
        console.log('number', button.textContent);
        sendNumberValue(button.textContent);
    });
});

