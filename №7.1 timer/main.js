const timer = setInterval(onIntervalNextTick, 1000);/* timeOute*/
const myInterval = setInterval(starTimer, 1000); /* timeOute timer*/

stopTimerClokc(myInterval);

function stopTimerClokc(time){
    clearTimeout(time);
}


const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');


htmlElements.clock.addEventListener('click', function() {
    switchToMode(this.dataset.mode)
});

htmlElements.stopwatch.addEventListener('click', function() {
    switchToMode(this.dataset.mode)
});

htmlElements.timer.addEventListener('click', function() {
    switchToMode(this.dataset.mode)/* доступ к елементу отрибута */
});


function removeHiddenButton(){
    htmlElements.startBtn.classList.remove('hidden');
    htmlElements.stopBtn.classList.remove('hidden');
    htmlElements.resetBtn.classList.remove('hidden');
  }

  function addHiddenButton(){
    htmlElements.startBtn.classList.add('hidden');
    htmlElements.stopBtn.classList.add('hidden');
    htmlElements.resetBtn.classList.add('hidden');
  }

/* Часы */
function onIntervalNextTick(){
    
    const timeIn = new Date();
    /* так типо наверн правильней наверн и руки не оторвут ) */
    const hour = timeIn.getHours();
    let minutes = timeIn.getMinutes();
    let seconds = timeIn.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    function checkTime(i){
        if (i<10){i="0" + i;
    }
    return i;
    }
    const timeOut = `${hour}:${minutes}:${seconds}`;
    /* так конечно короче*/
    /* const timeStrung = timeIn.toTimeString(); *//* Date in string */
    /* const timeOut = timeStrung.split(' ')[0]; *//* dait in array, 00:00:00 - this 0=[0] element new array*/
    htmlElements.output.innerText = timeOut;
    
}

/* Подменяем выходное значение output на ТАЙМЕР и обрано*/
function modifyText(new_text) {
    let output = htmlElements.output;
    output.firstChild.nodeValue = new_text;    
  }

/* переработать это говно */
  function starTimer(){
    let d = new Date();
    let t = d.toLocaleTimeString();
    htmlElements.output.innerHTML = t;
    const startTime = new Date().getTime();
    const output = htmlElements.output;
    const difference = (new Date().getTime() - startTime) / 1000;
    let seconds = parseInt(difference % 60);
    const minutes = parseInt((difference / 60) % 60);
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    output.innerText = `${minutes}:${seconds}`;
}


function addSelected(valueTabs){
    remooveSelected(htmlElements.clock);
    remooveSelected(htmlElements.timer);
    remooveSelected(htmlElements.stopwatch);
    valueTabs.classList.add('selected');
}

function remooveSelected(valueTabs){
    valueTabs.classList.remove('selected');
}


function switchToMode(mode) {
    debugger;
    switch (mode) {
      case 'clock':
           addSelected(htmlElements.clock);
           addHiddenButton();
           modifyText(onIntervalNextTick());
           setInterval(onIntervalNextTick, 1000);
           stopTimerClokc(myInterval);
        break;
      case 'stopwatch':
            addSelected(htmlElements.stopwatch);
            removeHiddenButton();
            modifyText(starTimer());
            setInterval(starTimer, 1000);
            stopTimerClokc(timer);
        break;
      case 'timer':
            addSelected(htmlElements.timer);
        break;
    }
  }