
const htmlElements = {};

function initHTMLElements() {
  htmlElements.h1 = document.querySelector('h1');
  htmlElements.span = document.querySelector('span');
  htmlElements.body = document.body;
  htmlElements.img = document.querySelector('img');
    htmlElements.p = document.querySelector('p');
}

function initEvenHandles() {
    htmlElements.h1.addEventListener('click', matFunction);
}

initHTMLElements();
initEvenHandles();

/*Функция выдающая рандомные значения для value*/
let myArray = ["Pink", "LightPink", "HotPink", "DeepPink","MediumVioletRed", "PaleVioletRed"];
function getRandomValue(arr, max) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getUniqueRandomValue(arr, currentValue) {
    let randomNumber;
    do {
        randomNumber = getRandomValue(arr, arr.length);
    } while (randomNumber === currentValue);
    return randomNumber;
}
let currentValue;

function matFunction() {
    currentValue = getUniqueRandomValue(myArray, currentValue);
    console.log(currentValue);
    htmlElements.body.className = currentValue;

    function textColorSnapColorCheimg() {
        htmlElements.span.style.color = "white";
        htmlElements.img.src = "http://svdsecurity.by/alexFiles/logo/logoZhorovWhite.png";
        htmlElements.p.style.color = "white";
    }

    if(htmlElements.body.className ==="Pink"){
        htmlElements.span.innerHTML = "Java Script has a development trend!";
        textColorSnapColorCheimg();

    }else if(htmlElements.body.className ==="LightPink"){
        htmlElements.span.innerHTML = "JavaScript сompiles and interpreted in many programming languages!";
        textColorSnapColorCheimg();
    }
    else if(htmlElements.body.className ==="HotPink"){
        htmlElements.span.innerHTML = "Available on all devices and browsers!";
        textColorSnapColorCheimg();
    }
    else if(htmlElements.body.className ==="DeepPink"){
        htmlElements.span.innerHTML = "Has the ability to immediately see the result and manage multimedia space!";
        textColorSnapColorCheimg();
    }
    else if(htmlElements.body.className ==="MediumVioletRed"){
        htmlElements.span.innerHTML = "The demand for javascript programmers increases by 30% per year!";
        textColorSnapColorCheimg();
    }
    else if(htmlElements.body.className ==="PaleVioletRed"){
        htmlElements.span.innerHTML = "On tut.by: experts of foreign economic activity 3 pages, and on a JavaScript programmer 15 pages!";
        textColorSnapColorCheimg();
    }

}
