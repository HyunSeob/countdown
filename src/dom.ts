import Countdown from './countdown';

function showCountdown(element: HTMLElement, future: Date): void {
  const countdown = new Countdown(future);
  element.innerText = countdown.differenceFromNowString();

  setInterval(() => {
    element.innerText = countdown.differenceFromNowString();
  }, 1000);
}

export default showCountdown;
