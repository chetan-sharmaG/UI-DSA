class EventEmitter {
  constructor() {
    this.events = Object.create(null);
    this._key = 0;
  }

  on(eventName, listener) {
    if (!Object.hasOwn(this.events, listener)) {
      this.events[eventName] = {};
    }
    let uniqueKey = this._key;
    this.events[eventName][uniqueKey] = listener;
    this._key++;
    // return this;
    return {
      off: () => {
        delete this.events[eventName][uniqueKey];
      },
    };
  }
  emit(eventName, ...args) {
    if (!Object.hasOwn(this.events, eventName)) {
      return false;
    }
    let listeners = { ...this.events[eventName] };
    Object.values(listeners).forEach((listener) => {
      listener.apply(null, args);
    });
    return true;
  }
}

const emitter = new EventEmitter();
function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}

// Returns a subscription object that has an .off() method.
const sub = emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 2, 5);
// > "The sum is 7"

emitter.on("foo", (a, b) => {
  console.log(`The product is ${a * b}`);
});
emitter.emit("foo", 4, 5);
// > "The sum is 9"
// > "The product is 20"

sub.off(); // This unsubscribes the callback that logs the sum of the numbers.
emitter.emit("foo", -3, 9);
// > "The product is -27"
