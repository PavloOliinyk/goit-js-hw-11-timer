import timerTemplate from '../templates/timer.hbs';

class CountdownTimer {
  time;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTargetDate() {
    return this.targetDate;
  }

  getTime() {
    this.time = this.targetDate - Date.now();
    return this.time;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 31, 2021'),
});

const countdownTime = timer.getTime();

const todayDate = {
  days: Math.floor(countdownTime / (1000 * 60 * 60 * 24)),
  hours: Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  mins: Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60)),
  secs: Math.floor((countdownTime % (1000 * 60)) / 1000),
};

const markup = timerTemplate(todayDate);

document.body.insertAdjacentHTML('afterbegin', markup);
