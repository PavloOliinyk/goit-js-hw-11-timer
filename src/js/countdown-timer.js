class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerRef = document.querySelector(this.selector);
  }

  makeMarkup() {
    const markUp = `<div class='field'>
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

    this.timerRef.innerHTML = markUp;
  }

  get Refs() {
    const { timerRef } = this;

    return {
      days: timerRef.querySelector('[data-value="days"]'),
      hours: timerRef.querySelector('[data-value="hours"]'),
      mins: timerRef.querySelector('[data-value="mins"]'),
      secs: timerRef.querySelector('[data-value="secs"]'),
    };
  }

  startTimer() {
    this.makeMarkup();

    this.timerId = setInterval(() => {
      this.updateCountdownTime();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  stopTimer() {
    clearInterval(this.timerId);

    this.Refs.days.textContent = '00';
    this.Refs.hours.textContent = '00';
    this.Refs.mins.textContent = '00';
    this.Refs.secs.textContent = '00';
  }

  updateCountdownTime() {
    const time = this.targetDate - Date.now();
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.Refs.days.textContent = days;
    this.Refs.hours.textContent = hours;
    this.Refs.mins.textContent = mins;
    this.Refs.secs.textContent = secs;

    if (time <= 0) {
      this.stopTimer();
    }
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 08, 2021'),
});

timer.startTimer();
