class Clock {
  constructor() {
    if(new.target === Clock) {
        throw new Error("Clock is an abstract class and cannot be instantiated directly.");
    }
  }

  showTime() {
    throw new Error("claock - showtime method must be implemented by child class");
  }
}

class DigitalClock extends Clock {
  constructor(buttonId) {
    super();
    let button = document.getElementById(buttonId);
    button.addEventListener('click', this.showTime);
  }

  showTime() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    let amPm = currentHour >= 12 ? 'PM' : 'AM';
    let displayHour = currentHour % 12;
    if(displayHour === 0)
    {
        displayHour = 12;
    }

    let didgitalFormat = `${displayHour}:${currentMinute}:${currentSecond} ${amPm}`;
    alert(didgitalFormat);
  }
}

class AnalogClock extends Clock {
      constructor(buttonId) {
        super();
        const button = document.getElementById(buttonId);
        button.addEventListener('click', this.showTime);
      }

      showTime() {
        let now = new Date();
        let currentHour = now.getHours();
        let currentMinute = now.getMinutes();
        let currentSecond = now.getSeconds();

        let displayHour = currentHour % 12;
        if (displayHour === 0) {
          displayHour = 12;
        }

        let hourDeg = displayHour * 30;
        let minDeg = currentMinute * 6;
        let secDeg = currentSecond * 6;

        let analogFormat = `Hour Hand at ${hourDeg}deg\nMinute Hand at ${minDeg}deg\nSecond Hand at ${secDeg}deg`;
        alert(analogFormat);
      }
    }

    let myDigitalClock = new DigitalClock('btn-digital');
    let myAnalogClock = new AnalogClock('btn-analog');