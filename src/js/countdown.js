class CountdownTimer {
  time;
  
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  
  getTargetDate() {
    return this.targetDate;
  }
  
  makeMarkup() {
       const timerRef = document.querySelector(this.selector);
       
    timerRef.innerHTML = `<div class='field'>
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
  }

  setCountdownTime() {
    const deadline = this.targetDate;
    
        const timerId = setInterval(this.updateCountdownTime, 1000, deadline);
    
  }
       
   updateCountdownTime(deadline) {
     let time = deadline - Date.now();
     
     let days = Math.floor(time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((time % (1000 * 60)) / 1000);
     
         const Refs = {
       days: document.querySelector('[data-value="days"]'),
       hours: document.querySelector('[data-value="hours"]'),
       mins: document.querySelector('[data-value="mins"]'),
       secs: document.querySelector('[data-value="secs"]'),
     };
     
     Refs.days.innerHTML = days;
     Refs.hours.textContent = hours;
     Refs.mins.textContent = mins;
     Refs.secs.textContent = secs;
   }
  }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 31, 2021'),
});

timer.makeMarkup();
timer.setCountdownTime();

// ===============================
// .timer {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   outline: 2px solid red;
// }
// ==============================
// <div class='timer' id='timer-1'>
//   </div>
