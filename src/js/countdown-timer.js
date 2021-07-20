class CountdownTimer {
  timerId;
  selector;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  makeMarkup() {
    const div = document.createElement('div');
    div.classList.add('timer');
    div.id = this.selector;
    div.innerHTML = `<div class='field'>
    <span class='value' data-value='days'>
      11
    </span>
    <span class='label'>Days</span>
  </div>

  <div class='field'>
    <span class='value' data-value='hours'>
      11
    </span>
    <span class='label'>Hours</span>
  </div>

  <div class='field'>
    <span class='value' data-value='mins'>
      11
    </span>
    <span class='label'>Minutes</span>
  </div>

  <div class='field'>
    <span class='value' data-value='secs'>
      11
    </span>
    <span class='label'>Seconds</span>
  </div>`;

    document.body.appendChild(div);
  }

  runCountdownTimer() {
    const deadline = this.targetDate;
    const newTimerId = this.selector;

    this.timerId = setInterval(this.updateCountdownTime, 1000, deadline, newTimerId);
  }

  updateCountdownTime(deadline, newTimerId) {
    const timerWrapper = document.getElementById(`${newTimerId}`);
    const time = deadline - Date.now();

    const Refs = {
      days: timerWrapper.querySelector('[data-value="days"]'),
      hours: timerWrapper.querySelector('[data-value="hours"]'),
      mins: timerWrapper.querySelector('[data-value="mins"]'),
      secs: timerWrapper.querySelector('[data-value="secs"]'),
    };

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    if (time >= 0) {
      Refs.days.textContent = days;
      Refs.hours.textContent = hours;
      Refs.mins.textContent = mins;
      Refs.secs.textContent = secs;
      return;
    }

    Refs.days.textContent = '00';
    Refs.hours.textContent = '00';
    Refs.mins.textContent = '00';
    Refs.secs.textContent = '00';

    clearInterval(this.timerId);
  }
}

// Во время вызова экземпляра класса прописать selector: '#timer'
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 31, 2021'),
});

timer.makeMarkup();
timer.runCountdownTimer();
