const BASE_DAYS = 1;
const BASE_HOURS = 9;

class Countdown {
  constructor(private future: Date) {}

  public differenceFromNow() {
    const now = new Date();
    const diff = new Date(this.future.getTime() - now.getTime());

    return {
      days: diff.getDate() - BASE_DAYS,
      hours: diff.getHours() - BASE_HOURS,
      minutes: diff.getMinutes(),
      seconds: diff.getSeconds()
    };
  }

  public differenceFromNowString() {
    const diff = this.differenceFromNow();

    Object.keys(diff).forEach(key => {
      if (diff[key] <= 0) {
        diff[key] = 0;
      }
    });

    return `${diff.days}:${diff.hours}:${diff.minutes}:${diff.seconds}`;
  }
}

export default Countdown;
