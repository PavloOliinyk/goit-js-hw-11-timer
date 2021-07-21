class CountdownTimer {
  timerId;
  selector;
  timerRef;

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

    const Refs = this.Refs;
    const deadline = this.targetDate;

    this.timerId = setInterval(this.updateCountdownTime, 1000, deadline, Refs);
  }

  updateCountdownTime(deadline, Refs) {
    const time = deadline - Date.now();

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

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});

timer.startTimer();
