
function cheColor() {
    let newColor = document.querySelector(".inColor");
    document.body.style.backgroundColor = newColor.value;
}

function listSelect(){
    let myListValue = document.querySelector('.myList');
    document.body.style.backgroundColor = myListValue.value;
}

function myListClass(){
    document.body.style.backgroundColor=null;
    let myListValueClass = document.querySelector('.myListClass');
    document.body.className = myListValueClass.value;
}
