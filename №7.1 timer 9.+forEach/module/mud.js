htmlElements.clock.addEventListener('click', function() {
    switchToMode(this.dataset.mode)
});

htmlElements.stopwatch.addEventListener('click', function() {
    switchToMode(this.dataset.mode)
});

htmlElements.timer.addEventListener('click', function() {
    switchToMode(this.dataset.mode)/* доступ к елементу отрибута */
});

htmlElements.startBtn.addEventListener('click', timerStartButton);

htmlElements.stopBtn.addEventListener('click', function(){
    clearTimeout(startTimeInterval);
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
            addHiddenButton();
            clearTimeout(startTimeInterval);
            startClockInterval = setInterval(onIntervalNextTick, 1000);

        break;
      case 'stopwatch':
            addSelected(htmlElements.stopwatch);
            removeHiddenButton();
            htmlElements.output.innerText = '00:00:00';
            clearTimeout(startClockInterval);
            startTimeInterval = setInterval(timerGo, 1000);
        break;
      case 'timer':
            addSelected(htmlElements.timer);
        break;
    }
  }
