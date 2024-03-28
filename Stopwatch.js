
  let timer;
  let startTime;
  let running = false;
  let recordedTimes = [];

  function startStopwatch() {
    if (!running) {
      startTime = new Date().getTime();
      timer = setInterval(updateDisplay, 10);
      running = true;
    }
  }

  function pauseStopwatch() {
    clearInterval(timer);
    running = false;
  }

  function stopStopwatch() {
    clearInterval(timer);
    running = false;
    document.getElementById('display').innerText = '00:00:00';
    recordedTimes = [];
    document.getElementById('recordedTimes').innerText = '';
  }

  function updateDisplay() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById('display').innerText = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds);
  }

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  function recordTime() {
    if (running) {
      let currentTime = document.getElementById('display').innerText;
      recordedTimes.push(currentTime);
      displayRecordedTimes();
    }
  }

  function displayRecordedTimes() {
    let recordedTimesElement = document.getElementById('recordedTimes');
    recordedTimesElement.innerHTML = '';
    recordedTimes.forEach(function(time, index) {
      let p = document.createElement('p');
      p.textContent = 'Time ' + (index + 1) + ': ' + time;
      recordedTimesElement.appendChild(p);
    });
  }
