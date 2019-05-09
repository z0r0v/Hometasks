
const htmlElements = {};

function initHTMLElements() {
  htmlElements.h1 = document.querySelector('h1.textChe');
  htmlElements.body = document.body;
}

function initEvenHandles() {
    htmlElements.h1.addEventListener('click', matFunction);
}

initHTMLElements();
initEvenHandles();

debugger;

function matFunction() {
let value = Math.floor(Math.random() * 6);
    switch (value) {
        case "0":
            htmlElements.cheSpan.innerHTML = "1234";
            htmlElements.body.className = "blue";
            break;
        case "1":
            htmlElements.cheSpan.innerHTML = "";
            htmlElements.body.className = "blue";
            break;
        case "2":
            htmlElements.cheSpan.innerHTML = "";
            htmlElements.body.className = "blue";
            break;
        case "3":
            htmlElements.cheSpan.innerHTML = "";
            htmlElements.body.className = "blue";
            break;
        case "4":
            htmlElements.cheSpan.innerHTML = "";
            htmlElements.body.className = "blue";
            break;
        case "5":
            htmlElements.cheSpan.innerHTML = "";
            htmlElements.body.className = "blue";
            break;
    }
}