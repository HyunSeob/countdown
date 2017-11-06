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

type Subscriber = (count: Count) => any;

class Countdown {
  private subscribers: Subscriber[] = [];

  constructor(private future: Date) {
    setInterval(() => {
      this.subscribers.forEach(subscriber =>
        subscriber(this.differenceFromNow())
      );
    }, MS_IN_SECOND);
  }

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

  public observe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }
}

export default Countdown;
