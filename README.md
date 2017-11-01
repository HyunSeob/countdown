# countdown
A simple, lightweight countdown module

## Example

``` javascript
const countdown = new Countdown(new Date(2017, 10, 30, 23, 59, 59)); // Date must be a future. If you put the past, it will always return zero values.
const $countdown = $('#countdown');

countdown.observe(({ days, hours, minutes, seconds }) => {
  $countdown.text(`${days}:${hours}:${minutes}:${seconds}`);
});
```
