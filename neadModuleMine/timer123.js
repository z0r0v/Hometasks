
const htmlElements = {
    outputTimer: document.querySelector('.tabs [data-mode = "timer"] .output'),
    buttonStartTimer: document.querySelector('.tabs [data-mode = "timer"] .buttons .start'),
    buttonStopTimer: document.querySelector('.tabs [data-mode = "timer"] .buttons .stop'),
    buttonResetTimer: document.querySelector('.tabs [data-mode = "timer"] .buttons .reset'),
    buttonsTimer: document.querySelectorAll('.container .tabs [data-mode="timer"] .buttons button'),
    
    
}

function addButtunsEvent(){
    htmlElements.buttonStart.addEventListener('click', runTimer);
    htmlElements.buttonReset.addEventListener('click', resetTimer);
    htmlElements.buttonStop.addEventListener('click', timerStopButton);

    
}
addButtunsEvent();









let startInterval, difference, startTime;










export {Timer};
