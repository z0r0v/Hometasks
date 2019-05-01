/*Обьявляем переменнуые в функции для изменения значения к нулю */
function bgStlNul() {
    /*It was but not correct*/
    /*To shorten the code, it took variables out of functions*/
   /* let style = document.body.style;
    let clanNameNul = document.body;

    /!*Equalizes color and grade to nul*!/
    style.backgroundColor = null;/!*reset style value*!/
    clanNameNul.className = null;/!*reset class value*!/*/

    /*It became correct (just change the values to empty)*/
    document.body.style.backgroundColor = "";
    document.body.className ="";
    document.body.style.removeProperty("--main-color");
}

let dB = document.body;
let dBs = dB.style;

/*№1 here I change the style through slim body in the document get into classes*/
function cheColor() {
    bgStlNul();
    let newColor = document.querySelector(".inColor");
    dBs.backgroundColor = newColor.value;
}

/*№2 here I change the style from the drop-down list, I get into classes*/
function listSelect(){
    bgStlNul();
    let myListValue = document.querySelector('.myList');
    dBs.backgroundColor = myListValue.value;
}

/*№3 here I change the class for the body element and the classes are written in CSS*/
function myListClass(){
    bgStlNul();
    let myListValueClass = document.querySelector('.myListClass');
    dB.className = myListValueClass.value;
}

/*№4 here I change the class for the body element in CSS*/
function applyColor(){
    bgStlNul();
    let myListValueClass = document.querySelector('.inColorCss');
    dBs.setProperty('--main-color', myListValueClass.value);
}

/*№5 here I change the class for the body element in CSS no Button*/
/*При помощи this можно сократить запись не обращаясь к document.querySelector а на прямую.*/
function myListChangeThis(selectElement){
    bgStlNul();
    dBs.setProperty('--main-color', selectElement.value);
}