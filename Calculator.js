let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number');
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let enterButton = document.getElementById('enter');
let basicOperatorButton = document.querySelectorAll('.basic-operator');
let complexOperatorButton = document.querySelectorAll('.complex-operator');
let variableButton = document.querySelectorAll('.variable');
let variableAssignmentButton = document.getElementById('ans');
let ansButton = document.getElementById('ans');

let displayInputs = [];
let calculatorInputs = [];
let Ans;
let variable = false;
let A;
let B;
let C;
let D;
let E;
let F;
let G;

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

ansButton.addEventListener('click', function () {
    if (typeof Ans !== 'undefined') {
        // Ans is defined
        addInput(this.innerHTML, Ans.toString());
    } 
    else {
        // Ans is not defined
        display.innerHTML = 'Ans is not defined';
    }
});

variableAssignmentButton.forEach(function (element) {
    element.addEventListener('click', function () {
        addInput(this.innerHTML, Ans.toString()); // "this" refers to the clicked element
    });
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
    Ans = expressionFunction();
    display.innerHTML = Ans;
}