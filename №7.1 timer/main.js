setInterval(onIntervalNextTick, 1000);/* timeOute*/

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.start');
htmlElements.resetBtn = document.querySelector('.container .buttons button.start');
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



function onIntervalNextTick(){
    let timeIn = new Date();
    let timeStrung = timeIn.toTimeString();/* Date in string */
    let timeOut = timeStrung.split(' ')[0];/* dait in array, 00:00:00 - this 0=[0] element new array*/
    htmlElements.output.innerHTML = timeOut;
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
        break;
      case 'stopwatch':
            addSelected(htmlElements.stopwatch);
        break;
      case 'timer':
            addSelected(htmlElements.timer);
        break;
    }
  }