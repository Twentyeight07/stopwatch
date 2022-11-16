const d = document,
  $startBtn = d.getElementById('startBtn'),
  $stopBtn = d.getElementById('stopBtn'),
  $resetBtn = d.getElementById('resetBtn'),
  $seconds = d.getElementById('seconds'),
  $tens = d.getElementById('tens');

let seconds = 00,
  tens = 00,
  interval;

d.addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target == $startBtn || e.target == `<b>Start</b>`) {
    clearInterval(interval);
    interval = setInterval(() => {
      startTimer();
    }, 10);
  }

  if (e.target == $stopBtn) {
    clearInterval(interval);
  }

  if (e.target == $resetBtn) {
    seconds = '00';
    tens = '00';
    $seconds.innerHTML = seconds;
    $tens.innerHTML = tens;
    clearInterval(interval);
  }
});

const startTimer = () => {
  tens++;
  if (tens <= 9) {
    $tens.innerHTML = '0' + tens;
  }

  if (tens > 9) {
    $tens.innerHTML = tens;
  }

  if (tens > 99) {
    // console.log(seconds);
    seconds++;
    tens = 0;
    $tens.innerHTML = '0' + 0;
    $seconds.innerHTML = `0${seconds}`;
  }

  if (seconds > 9) {
    $seconds.innerHTML = seconds;
  }
};
