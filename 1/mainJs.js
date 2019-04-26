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
/*Переменная в масив потом масив можно вызвать в функции*/
    let newTextValue = function (){
        let textValue1 = document.getElementById('incomingDataFirstField').value;
        let textValue2 = document.getElementById('incomingDataSecondField').value;
        return[textValue1, textValue2];
};

/*Functions of the result buttons" + - * / " */
function MyFunctionPlus() {
    if (valueInp()) {
        let textValue =  newTextValue();
        let textValue1 = textValue[0];
        let textValue2 = textValue[1];
        document.getElementById('incomingDataFirstField').value = result = parseInt(textValue1) + parseInt(textValue2);
    }
}

function MyFunctionSubtraction() {
    if (valueInp()) {
        let textValue =  newTextValue();
        let textValue1 = textValue[0];
        let textValue2 = textValue[1];
        document.getElementById('incomingDataFirstField').value = result = parseInt(textValue1) - parseInt(textValue2);
    }
}

function MyFunctionDivision() {
    if (valueInp()) {
        let textValue =  newTextValue();
        let textValue1 = textValue[0];
        let textValue2 = textValue[1];
        document.getElementById('incomingDataFirstField').value = result = (parseInt(textValue1) / parseInt(textValue2)).toFixed(2);
    }
}

function MyFunctionMultiply() {
    if (valueInp()) {
        let textValue =  newTextValue();
        let textValue1 = textValue[0];
        let textValue2 = textValue[1];
        document.getElementById('incomingDataFirstField').value = result = parseInt(textValue1) * parseInt(textValue2);
    }
}

/*The buttons for the first column are collected following the example in the stack*/
function MyFunction(value) {
    document.getElementById('incomingDataFirstField').value += value;
}
