
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


function matFunction() {


    let exists = [],value, randomNumber, max = 5;
    for(let l = 0; l < max; l++) {
        do {
        randomNumber = Math.floor(Math.random() * max);
        } while (exists[randomNumber]);
        exists[randomNumber] = true;
        value = randomNumber;
}

    switch (value) {
        case 0:
            htmlElements.span.innerHTML = "Java Script has a development trend!";
            htmlElements.span.style.color ="white";
            htmlElements.body.className = "Pink";
            htmlElements.img.src = "img/logoZhorovWhite.png";
            htmlElements.p.style.color ="white";


            break;
        case 1:
            htmlElements.span.innerHTML = "JavaScript сompiles and interpreted in many programming languages!";
            htmlElements.span.style.color ="white";
            htmlElements.body.className = "LightPink";
            htmlElements.img.src = "img/logoZhorovWhite.png";
            htmlElements.p.style.color ="white";
            break;
        case 2:
            htmlElements.span.innerHTML = "Available on all devices and browsers!";
            htmlElements.span.style.color ="white";
            htmlElements.body.className = "HotPink";
            htmlElements.img.src = "img/logoZhorovWhite.png";
            htmlElements.p.style.color ="white";
            break;
        case 3:
            htmlElements.span.innerHTML = "Has the ability to immediately see the result and manage multimedia space!";
            htmlElements.span.style.color ="white";
            htmlElements.body.className = "DeepPink";
            htmlElements.img.src = "img/logoZhorovWhite.png";
            htmlElements.p.style.color ="white";
            break;
        case 4:
            htmlElements.span.innerHTML = "The demand for javascript programmers increases by 30% per year!";
            htmlElements.span.style.color ="white";
            htmlElements.body.className = "MediumVioletRed";
            htmlElements.img.src = "img/logoZhorovWhite.png";
            htmlElements.p.style.color ="white";
            break;
        case 5:
            htmlElements.span.innerHTML = "On tut.by: experts of foreign economic activity 3 pages, and on a JavaScript programmer 15 pages!";
            htmlElements.span.style.color ="white";
            htmlElements.body.className = "PaleVioletRed";
            htmlElements.img.src = "img/logoZhorovWhite.png";
            htmlElements.p.style.color ="white";
            break;
    }
}
