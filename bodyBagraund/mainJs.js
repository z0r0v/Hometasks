/*here I change the style through slim body in the document get into classes*/
function cheColor() {
    let newColor = document.querySelector(".inColor");
    document.body.style.backgroundColor = newColor.value;
}

/*here I change the style from the drop-down list, I get into classes*/
function listSelect(){
    let myListValue = document.querySelector('.myList');
    document.body.style.backgroundColor = myListValue.value;
}
/*here I change the class for the body element and the classes are written in CSS*/
function myListClass(){
    document.body.style.backgroundColor=null;/*reset style value*/
    let myListValueClass = document.querySelector('.myListClass');
    document.body.className = myListValueClass.value;
}

/*here I change the class for the body element in CSS*/
function applyColor(){
    document.body.style.backgroundColor=null;/*reset style value*/
    document.body.className=null;/*reset class value*/
    let myListValueClass = document.querySelector('.inColorCss');
    document.body.style.setProperty('--main-color', myListValueClass.value);
}