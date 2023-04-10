//variables for user input, 1st number, 2nd number & operator
let firstNumber; 
let secondNumber; 
let operator; 

//Calculator functions for basic math operators
function add(num1, num2) {
    return num1 + num2; 
}

function subtract(num1, num2) { 
    return num1 - num2; 
}

function multiply(num1, num2) {
    return num1 * num2; 
}

function divide(num1, num2) {
    return num1 / num2; 
}

/*operate function, switch statement calls appropriate math function
depending on operator passed in*/

function operate(operator, num1, num2) { 
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2); 
        case '/':
            return divide(num1, num2); 
    }
}
