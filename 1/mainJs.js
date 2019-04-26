/*Валидация*/
function valueInp() {
    let isValid;
    if (!isNaN(parseInt(document.getElementById('incomingDataFirstField').value))) {
        isValid = true;
    } else {
        alert('Введите число правильно');
        isValid = false;
    }
    return isValid;
}

/*Функции кнопок приводящихк результатам " + - * / " */
function MyFunctionPlus() {
    if (valueInp()) {
        let textValue1 = document.getElementById('incomingDataFirstField').value;
        let textValue2 = document.getElementById('incomingDataSecondField').value;
        let result = parseInt(textValue1) + parseInt(textValue2);
        document.getElementById('incomingDataFirstField').value = result;
    }
}

function MyFunctionSubtraction() {
    if (valueInp()) {
        let textValue1 = document.getElementById('incomingDataFirstField').value;
        let textValue2 = document.getElementById('incomingDataSecondField').value;
        let result = parseInt(textValue1) - parseInt(textValue2);
        document.getElementById('incomingDataFirstField').value = result;
    }
}

function MyFunctionDivision() {
    if (valueInp()) {
        let textValue1 = document.getElementById('incomingDataFirstField').value;
        let textValue2 = document.getElementById('incomingDataSecondField').value;
        let result = parseInt(textValue1) / parseInt(textValue2);
        document.getElementById('incomingDataFirstField').value = result.toFixed(2);
    }
}

function MyFunctionMultiply() {
    if (valueInp()) {
        let textValue1 = document.getElementById('incomingDataFirstField').value;
        let textValue2 = document.getElementById('incomingDataSecondField').value;
        let result = parseInt(textValue1) * parseInt(textValue2);
        document.getElementById('incomingDataFirstField').value = result;
    }
}

/*Кнопки для первой графы собранны по примеру в стак*/
function MyFunction(value) {
    document.getElementById('incomingDataFirstField').value += value;
}
