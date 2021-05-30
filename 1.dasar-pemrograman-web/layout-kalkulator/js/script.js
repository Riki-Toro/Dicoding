const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};


function updateDisplay() {
    document.querySelector(".display").innerText = calculator.displayNumber;
}

function clearDisplay() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;

}

function inputDigit(digit) {
    if( calculator.displayNumber === '0' ) {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function negatifDisplay() {
    if( calculator.displayNumber === '0' ) {
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
    
}

function operatorDisplay(operator) {
    if( !calculator.waitingForSecondNumber ) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function samadenganDisplay() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    
    calculator.displayNumber = result;
}


const buttons =document.querySelectorAll(".button");
for( button of buttons ) {
    button.addEventListener('click', function(even) {
        const target = even.target;

        if( target.classList.contains('hapus') ) {
            clearDisplay();
            updateDisplay();
            return;
        }

        if( target.classList.contains('operator') ) {
            operatorDisplay(target.innerText);
            return;
        }
        if( target.classList.contains('negatif') ) {
            negatifDisplay();
            updateDisplay();
            return;
        }
        if( target.classList.contains('samadengan') ) {
            samadenganDisplay();
            updateDisplay();
            return;
        }


        inputDigit(target.innerText);
        updateDisplay();
    });
}