export default function createResumableInterval(callback, delay, ...args) {
  let stopped = false;
  let timer = null;
  function start() {
    if (stopped || timer != null) {
      return;
    }
    callback(...args);
    timer = setInterval(callback, delay, ...args);
  }
  function clearIntervals() {
    clearInterval(timer);
    timer = null;
  }
  function pause() {
    if (stopped) return;
    clearIntervals();
  }
  function stop() {
    stopped = true;
    clearIntervals();
  }
  return { start, stop, pause };
}
let i = 0;
// t = 0:
const interval = createResumableInterval(() => {
  i++;
}, 10);
// t = 10:
interval.start();
// setTimeout(()=>,10) // i is now 1.
// t = 20: callback executes and i is now 2.
// t = 25:
interval.pause();
// t = 30: i remains at 2 because interval.pause() was called.
// t = 35:
interval.start(); // i is now 3.
// t = 45: callback executes and i is now 4.
// t = 50:
interval.stop(); // i remains at 4.
