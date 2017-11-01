declare module '@hyunseob/countdown' {
  interface Count {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  export default class Countdown {
    /**
     * Create Countdown instance which is targeting the `future`.
     */
    constructor(future: Date);

    /**
     * Get a count data which indicate distance from the `future`
     */
    public differenceFromNow(): Count;

    /**
     * Observe a count data. Subscriber will be fired every seconds, with count data.
     */
    public observe(subscriber: (count: Count) => any): void;
  }
}
