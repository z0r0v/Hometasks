const timer = setInterval(onIntervalNextTick, 1000);/* timeOute*/

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
/* Клик по стоп вотч */
htmlElements.stopwatch.addEventListener('click', chengeTimeToTimer);

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


function onIntervalNextTick(){
    const timeIn = new Date();
    const timeStrung = timeIn.toTimeString();/* Date in string */
    const timeOut = timeStrung.split(' ')[0];/* dait in array, 00:00:00 - this 0=[0] element new array*/
    htmlElements.output.innerText = timeOut;
    
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
    switch (mode) {
      case 'clock':
           addSelected(htmlElements.clock);
           onIntervalNextTick();
           setInterval(onIntervalNextTick, 1000);
           /* Тут дебажим */
           /* clearTimeout(myInterval); *//* Стоп интервал не стработал */
           addHiddenButton();
           

        break;
      case 'stopwatch':
            addSelected(htmlElements.stopwatch);
            clearTimeout(timer);
        break;
      case 'timer':
            addSelected(htmlElements.timer);
        break;
    }
  }

  function chengeTimeToTimer(){
      
   /*  const startTime = new Date().getTime();
    const myInterval = setInterval(Timer, 1000);
    const output = htmlElements.output;
        function Timer(){
            const difference = (new Date().getTime() - startTime) / 1000;
            let seconds = parseInt(difference % 60);
            const minutes = parseInt((difference / 60) % 60);
            if(seconds < 10){
                seconds = '0' + seconds;
            }
            output.innerText = `${minutes}:${seconds}`;
        }
 */
        removeHiddenButton();
  }
