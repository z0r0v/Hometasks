/*function valueInp() {
    if (typeof(document.getElementById('incomingDataFirstField').value) === "number") {
    } else
    alert('Введите число правильно');*/
/*Это валидация но пока что фигня какаято*/

function MyFunctionPlus() {
    let textValue1 = document.getElementById('incomingDataFirstField');
    let textValue2 = document.getElementById('incomingDataSecondField');
    let result = parseInt(textValue1) + parseInt(textValue2);
    document.getElementById('incomingDataFirstField').value = result;
}

function MyFunctionSubtraction() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) - parseInt(textValue2);
    document.getElementById('incomingDataFirstField').value = result;
}

function MyFunctionDivision() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) / parseInt(textValue2);
    document.getElementById('incomingDataFirstField').value = result.toFixed(2);
}

function MyFunctionMultiply() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) * parseInt(textValue2);
    document.getElementById('incomingDataFirstField').value = result;
}

/*Кнопки для первой графы*/
function MyFunction(value) {
    document.getElementById('incomingDataFirstField').value += value;
}
