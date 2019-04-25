function MyFunctionPlus() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) + parseInt(textValue2);
    incomingDataFirstField.value =result;
}

function MyFunctionSubtraction() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) - parseInt(textValue2);
    incomingDataFirstField.value =result;
}

function MyFunctionDivision() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) / parseInt(textValue2);
    incomingDataFirstField.value = result.toFixed(2);
}

function MyFunctionMultiply() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) * parseInt(textValue2);
    incomingDataFirstField.value = result;
}

/*Кнопки для первой графы*/
function MyFunction1() {
   incomingDataFirstField.value += "1";
}

function MyFunction2() {
    incomingDataFirstField.value += "2";
}

function MyFunction3() {
    incomingDataFirstField.value += "3";
}

function MyFunction4() {
    incomingDataFirstField.value += "4";
}

function MyFunction5() {
    incomingDataFirstField.value += "5";
}

function MyFunction6() {
    incomingDataFirstField.value += "6";
}

function MyFunction7() {
    incomingDataFirstField.value += "7";
}

function MyFunction8() {
    incomingDataFirstField.value += "8";
}

function MyFunction9() {
    incomingDataFirstField.value += "9";
}
