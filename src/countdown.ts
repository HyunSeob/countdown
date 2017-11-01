const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

interface Count {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

class Countdown {
  constructor(private future: Date) {}

  public differenceFromNow() {
    const now = new Date();
    let diff = this.future.getTime() - now.getTime();

    if (diff < 0) {
      diff = 0;
    }

    const days = Math.floor(diff / MS_IN_DAY);
    diff = diff - days * MS_IN_DAY;
    const hours = Math.floor(diff / MS_IN_HOUR);
    diff = diff - hours * MS_IN_HOUR;
    const minutes = Math.floor(diff / MS_IN_MINUTE);
    diff = diff - minutes * MS_IN_MINUTE;
    const seconds = Math.floor(diff / MS_IN_SECOND);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  public observe(subscriber: (count: Count) => any) {
    setInterval(() => {
      subscriber(this.differenceFromNow());
    }, MS_IN_SECOND);
  }
}

export default Countdown;
