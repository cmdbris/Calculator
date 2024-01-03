// Calculator Elements

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

// Variable History Elements



let ansHistory = document.getElementById('ans-history');
let variableHistory = document.querySelectorAll('.variable-history');
let variableHistoryValues = {}; // Object to store variable history assignments
const variableHistoryNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
variableHistoryNames.forEach((variableHistoryName, index) => {
    variableHistoryValues[variableHistoryName] = variableHistory[index]; // or any default value you want
});


// Initialize Global Calculator Variables

let displayInputs = [];
let calculatorInputs = [];
let Ans;
let inputVariable;
let variableValues = {}; // Object to store variable assignments
const variableNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
variableNames.forEach(variableName => {
    variableValues[variableName] = undefined; // or any default value you want
});



// Event Listeners for Calculator



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
        inputVariable = this.innerHTML;
        if (typeof variableValues[inputVariable] !== 'undefined') {
            // Variable is defined and not being assigned a new value
            addInput(this.innerHTML, variableValues[inputVariable].toString());
        }
        else if (typeof variableValues[inputVariable] === 'undefined' && displayInputs.length === 0) {
            // Variable is undefined, but being assigned a value
            addInput(this.innerHTML, '');
        }
        else {
            // Variable is undefined and not being assigned a value
            display.innerHTML = `${inputVariable} is undefined`;
        }
    });
});

variableAssignmentButton.addEventListener('click', function () {
    addInput(this.innerHTML, '');
});



// Functions used by Event Listeners



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
    if (element === '=' && displayInputs.length > 0) {
        calculatorInputs.splice(calculatorInputs.length - 2, 1, ''); // array.splice(indexToReplace, 1, newValue);
    }

}

function clearInputs() {
    displayInputs = [];
    calculatorInputs = [];
    display.innerHTML = 'CLEAR'
    setTimeout(function () {
        updateDisplay(displayInputs);
    }, 750);
}

function deleteInputs() {
    displayInputs.pop();
    calculatorInputs.pop();
    updateDisplay(displayInputs);
}

function computeInputs() {
    try {
        expressionFunction = new Function('return ' + calculatorInputs.join(''))
        Ans = expressionFunction();
    } catch (error) {
        display.innerHTML = 'Error';
        return;
    }

    let typingEffectArray = Ans.toString().split('');

    if (displayInputs.length > 0 && displayInputs[0] >= 'A' && displayInputs[0] <= 'G' && displayInputs[1] == '=') {
        variableValues[inputVariable] = Ans;
        display.innerHTML = `${inputVariable} = ${Ans}`;

        variableHistoryValues[inputVariable].innerHTML = `${inputVariable} = `;
        for (let i = 0; i < typingEffectArray.length; i++) {
            setTimeout(function () {
                variableHistoryValues[inputVariable].innerHTML += `${typingEffectArray[i]}`;
            }, i * 50); // Multiply the delay by the current iteration index
        }
    } else {
        display.innerHTML = Ans;
        ansHistory.innerHTML = `Ans = `;

        for (let i = 0; i < typingEffectArray.length; i++) {
            setTimeout(function () {
                ansHistory.innerHTML += `${typingEffectArray[i]}`;
            }, i * 50); // Multiply the delay by the current iteration index
        }
    }
}