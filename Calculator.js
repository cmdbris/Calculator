let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number');
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let enterButton = document.getElementById('enter');
let basicOperatorButton = document.querySelectorAll('.basic-operator');
let complexOperatorButton = document.querySelectorAll('.complex-operator');

let displayInputs = [];
let calculatorInputs = [];

// Iterate through the elements and add a click event listener to each
numberButton.forEach(function (element) {
    element.addEventListener('click', function () {
        let targetButton = event.target;
        let expressionNotation = targetButton.getAttribute('calculator-data');
        addInput(this.innerHTML, expressionNotation); // "this" refers to the clicked element
    });
});

basicOperatorButton.forEach(function (element) {
    element.addEventListener('click', function () {
        let targetButton = event.target;
        let expressionNotation = targetButton.getAttribute('calculator-data');
        addInput(this.innerHTML, expressionNotation); // "this" refers to the clicked element
    });
});

complexOperatorButton.forEach(function (element) {
    element.addEventListener('click', function () {
        let targetButton = event.target;
        let expressionNotation = targetButton.getAttribute('calculator-data');
        addInput(this.innerHTML, expressionNotation); // "this" refers to the clicked element
    });
});

clearButton.addEventListener('click', function () {
    clearInputs();
});

deleteButton.addEventListener('click', function () {
    deleteInputs();
});

enterButton.addEventListener('click', function () {
    computeInputs();
});

// // Functions used to support the event listeners // //



function updateDisplay(displayElements) {
    if (displayElements.length > 0) {
        display.innerHTML = displayElements.join(''); // Use join to concatenate array elements
    }
    else {
        display.innerHTML = "ENTER"
    }
}

function addInput(element, calculatorData) {
    displayInputs.push(element);
    updateDisplay(displayInputs);
    calculatorInputs.push(calculatorData);
}

function clearInputs() {
    displayInputs = [];
    calculatorInputs = [];
    updateDisplay(displayInputs);
}

function deleteInputs() {
    displayInputs.pop();
    calculatorInputs.pop();
    updateDisplay(displayInputs);
}

function computeInputs() {
    expressionFunction = new Function('return ' + calculatorInputs.join(''))
    display.innerHTML = expressionFunction();

    //display.innerHTML = expression.join(''); // Use join to concatenate array elements
}