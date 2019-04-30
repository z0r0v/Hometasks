/*Обьявляем переменнуые в функции для изменения значения к нулю */
function bgStlNul() {
    /*To shorten the code, it took variables out of functions*/
    let style = document.body.style;
    let clanNameNul = document.body;
    /*Приравниваю занчения цвета и класса к nul*/
    style.backgroundColor = null;/*reset style value*/
    clanNameNul.className = null;/*reset class value*/
}

/*№1 here I change the style through slim body in the document get into classes*/
function cheColor() {
    bgStlNul();
    let newColor = document.querySelector(".inColor");
    document.body.style.backgroundColor = newColor.value;
}

/*№2 here I change the style from the drop-down list, I get into classes*/
function listSelect(){
    bgStlNul();
    let myListValue = document.querySelector('.myList');
    document.body.style.backgroundColor = myListValue.value;
}

/*№3 here I change the class for the body element and the classes are written in CSS*/
function myListClass(){
    bgStlNul();
    let myListValueClass = document.querySelector('.myListClass');
    document.body.className = myListValueClass.value;
}

/*№4 here I change the class for the body element in CSS*/
function applyColor(){
    bgStlNul();
    let myListValueClass = document.querySelector('.inColorCss');
    document.body.style.setProperty('--main-color', myListValueClass.value);
}

/*№5 here I change the class for the body element in CSS no Button*/
function myListChangeThis(selectElement){
    bgStlNul();
    document.body.style.setProperty('--main-color', selectElement.value);
}