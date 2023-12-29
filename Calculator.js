let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number');
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let enterButton = document.getElementById('enter');
let basicOperatorButton = document.querySelectorAll('.basic-operator');
let complexOperatorButton = document.querySelectorAll('.complex-operator');
let variableButton = document.querySelectorAll('.variable');
let variableAssignmentButton = document.getElementById('variable-assignment');
let ansButton = document.getElementById('ans');

let displayInputs = [];
let calculatorInputs = [];
let Ans;
let variableLetter;
let variableValues = {}; // Object to store variable assignments

// Iterate through the elements and add a click event listener to each
numberButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
        let targetButton = event.target;
        let expressionNotation = targetButton.getAttribute('calculator-data');
        addInput(this.innerHTML, expressionNotation); // "this" refers to the clicked element
    });
});

basicOperatorButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
        let targetButton = event.target;
        let expressionNotation = targetButton.getAttribute('calculator-data');
        addInput(this.innerHTML, expressionNotation); // "this" refers to the clicked element
    });
});

complexOperatorButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
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
        display.innerHTML = 'Ans is undefined';
    }
});

variableButton.forEach(function (element) {
    element.addEventListener('click', function () {
        variableLetter = this.innerHTML;
        if (typeof variableValues[variableLetter] !== 'undefined' && displayInputs.length !== 0) {
            // Variable is defined and not being assigned a new value
            addInput(this.innerHTML, variableLetter.toString());
        }
        else if (typeof variableValues[variableLetter] === 'undefined' && displayInputs.length === 0) {
            // Variable is undefined, but being assigned a value
            addInput(this.innerHTML, '');
        }
        else {
            // Variable is undefined and not being assigned a value
            display.innerHTML = `${variableLetter} is undefined`;
        }
    });
});

variableAssignmentButton.addEventListener('click', function () {
    addInput(this.innerHTML, '');
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
    variableLetter = undefined; // Reset the variableLetter
    updateDisplay(displayInputs);
}

function deleteInputs() {
    displayInputs.pop();
    calculatorInputs.pop();
    updateDisplay(displayInputs);
}

function computeInputs() {
    try {
        alert(calculatorInputs);
        expressionFunction = new Function('return ' + calculatorInputs.join(''))
        Ans = expressionFunction();
    } catch (error) {
        display.innerHTML = 'Error';
        return;
    }

    if (displayInputs.length > 0 && displayInputs[0] >= 'A' && displayInputs[0] <= 'G' && displayInputs[1] === '=') {
        variableValues[variableLetter] = Ans;
        display.innerHTML = `${variableLetter} = ${Ans}`;
    } else {
        display.innerHTML = Ans;
    }
}