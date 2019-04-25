function MyFunctionPlus() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) + parseInt(textValue2);
    ResCol.innerHTML = result;
}

function MyFunctionSubtraction() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) - parseInt(textValue2);
    ResCol.innerHTML = result;
}

function MyFunctionDivision() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) / parseInt(textValue2);
    ResCol.innerHTML = result.toFixed(2);
}

function MyFunctionMultiply() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) * parseInt(textValue2);
    ResCol.innerHTML = result;
}

/*Кнопки для первой графы*/
function MyFunction1() {
    document.getElementById('incomingDataFirstField').value = 1
}

function MyFunction2() {
    document.getElementById('incomingDataFirstField').value = 2
}

function MyFunction3() {
    document.getElementById('incomingDataFirstField').value = 3
}

function MyFunction4() {
    document.getElementById('incomingDataFirstField').value = 4
}

function MyFunction5() {
    document.getElementById('incomingDataFirstField').value = 5
}

function MyFunction6() {
    document.getElementById('incomingDataFirstField').value = 6
}

function MyFunction7() {
    document.getElementById('incomingDataFirstField').value = 7
}

function MyFunction8() {
    document.getElementById('incomingDataFirstField').value = 8
}

function MyFunction9() {
    document.getElementById('incomingDataFirstField').value = 9
}
