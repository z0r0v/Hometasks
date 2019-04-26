/*Валидация123*/
function valueInp() {
    let isValid;
    if (!isNaN(parseInt(document.getElementById('incomingDataFirstField').value))) {
        isValid = true;
    } else {
        alert('Enter the number correctly');
        isValid = false;
    }
    return isValid;
}

/*Reduce the entry of input values into the object*/
let incomingDataFirstField = document.getElementById('incomingDataFirstField');
let incomingDataSecondField = document.getElementById('incomingDataSecondField');

/*Variable in array then array can be called in function*/
let newTextValue = function(){
    let textValue1 = incomingDataFirstField.value;
    let textValue2 = incomingDataSecondField.value;
    return[textValue1, textValue2];
};

/*------------------- So it was before --------  ------------*/
    /*Functions of the result buttons" + - * / "
    function MyFunctionPlus() {
        if (valueInp()) {
            let textValue = newTextValue();
            incomingDataFirstField.value = parseInt(textValue[0]) + parseInt(textValue[1]);
        }
    }

    function MyFunctionSubtraction() {
        if (valueInp()) {
            let textValue = newTextValue();
            incomingDataFirstField.value = parseInt(textValue[0]) - parseInt(textValue[1]);
        }
    }

    function MyFunctionDivision() {
        if (valueInp()) {
            let textValue = newTextValue();
            incomingDataFirstField.value = (parseInt(textValue[0]) / parseInt(textValue[1])).toFixed(2);
        }
    }

    function MyFunctionMultiply() {
        if (valueInp()) {
            let textValue = newTextValue();
            incomingDataFirstField.value = parseInt(textValue[0]) * parseInt(textValue[1]);
        }
    }*/

/*------------------- So it became after optimization -------- */

/*Functions of the result buttons" + - * / " */
function Calculate(operation) {
    if (valueInp()) {
        let textValue = newTextValue();
        switch (operation) {
            case "+":
                incomingDataFirstField.value = parseInt(textValue[0]) + parseInt(textValue[1]);
                break;
            case "-":
                incomingDataFirstField.value = parseInt(textValue[0]) - parseInt(textValue[1]);
                break;
            case "*":
                incomingDataFirstField.value = parseInt(textValue[0]) * parseInt(textValue[1]);
                break;
            case "/":
                incomingDataFirstField.value = (parseInt(textValue[0]) / parseInt(textValue[1])).toFixed(2);
                break;
        }
    }
}

/*The buttons for the first column are collected following the example in the stack*/
function MyFunction(value) {
    incomingDataFirstField.value += value;
}
