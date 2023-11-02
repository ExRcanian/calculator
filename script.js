let currentNumber = '';
let previousNumber = '';
let operation = '';

const numberButton = document.querySelectorAll('.numbers');
const opButton = document.querySelectorAll('.operate');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const decimal = document.querySelector('.decimal');

function writeNumber(number) {
    if (currentNumber.length <=10) {
        currentNumber += number;
        current.textContent = currentNumber;
    }
}

numberButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        writeNumber(e.target.textContent);
    })
})

function writeOperator(operator) {
    operation = operator;
    previousNumber = currentNumber;
    previous.textContent = previousNumber + operation;
    currentNumber = '';
    current.textContent = '';
}

opButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        writeOperator(e.target.textContent);
    })
})

function operate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operation == '%') {
        previousNumber = (previousNumber / 100) * currentNumber;
    } else if (operation == 'X') {
        previousNumber = previousNumber * currentNumber;
    } else if (operation == '÷') {
        if (currentNumber <= 0) {
            previousNumber = 'Error, no dividing by 0';
            previous.textContent = previousNumber
            return;
        }
        previousNumber = previousNumber / currentNumber;
    } else if (operation == '+') {
        previousNumber = previousNumber + currentNumber;
    } else if (operation == '-') {
        previousNumber = previousNumber - currentNumber;
    }

    previous.textContent = '';
    current.textContent = previousNumber;
    operation = '';
}

equals.addEventListener('click', () => {
    if (currentNumber != '' && previousNumber != '') {
        operate();
    }
})

function clears() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    current.textContent = '';
    previous.textContent = '';
}

clear.addEventListener('click', () => {
    clears();
})

function addDecimal() {
    if(!currentNumber.includes('.')) {
        currentNumber += '.';
        current.textContent = currentNumber;
    }
}

decimal.addEventListener('click', () => {
    addDecimal();
})
