// get first input value
function getFirstNumber() {
    const firstNumberInput = document.getElementById('first-input');
    const firstNumberInputText = firstNumberInput.value;
    const firstNumber = parseFloat(firstNumberInputText);
    // firstNumberInput.value = '';
    return firstNumber;
}

// get second input value
function getSecondNumber() {
    const secondNumberInput = document.getElementById('second-input');
    const secondNumberInputText = secondNumberInput.value;
    const secondNumber = parseFloat(secondNumberInputText);
    // secondNumberInput.value = '';
    return secondNumber;
}

document.getElementById('calculate-button').addEventListener('click', function() {
    const firstInput = getFirstNumber();
    const secondInput = getSecondNumber();
    const resultInput = document.getElementById('result-input');
    const operatorInput = document.getElementById('operator-input');
    const operator = operatorInput.value;
    if(operator == '+') {
        resultInput.value = firstInput + secondInput;
    }else if(operator == '-') {
        resultInput.value = firstInput - secondInput;
    }else if(operator == '*') {
        resultInput.value = firstInput * secondInput;
    }else if(operator == '/') {
        resultInput.value = firstInput / secondInput;
    }else if(operator == '%') {
        resultInput.value = firstInput % secondInput;
    }else{
        alert('Please enter correct operator.');
    }

    // operatorInput.value = '';
});