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
    ResCol.innerHTML = result;
}

function MyFunctionMultiply() {
    let textValue1 = document.getElementById('incomingDataFirstField').value;
    let textValue2 = document.getElementById('incomingDataSecondField').value;
    let result = parseInt(textValue1) * parseInt(textValue2);
    ResCol.innerHTML = result;
}