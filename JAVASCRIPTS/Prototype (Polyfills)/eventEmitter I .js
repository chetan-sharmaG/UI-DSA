// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }

  on(eventName, listener) {
    if (!Object.hasOwn(this.events, eventName)) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(listener);
    return this;
  }

  emit(eventName, ...args) {
    if (!Object.hasOwn(this.events, eventName)) return false;

    let listeners = this.events[eventName].slice();
    listeners.forEach((listener) => {
      listener.apply(this, args);
    });
    return true;
  }

  off(eventName, listener) {
    if (!Object.hasOwn(this.events, eventName)) {
      return this;
    }
    let listeners = this.events[eventName];

    let index = listeners.findIndex((item) => item === listener);
    if (index < 0) return this;

    this.events[eventName].splice(index, 1);
    return this;
  }
}
const emitter = new EventEmitter();

function addTwoNumbers(...args) {
  console.log(`The sum is ${args.reduce((prev,curr)=>prev + curr,0)}`);
}
emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 2, 5,10);
// > "The sum is 7"

emitter.on("foo", (a, b) => console.log(`The product is ${a * b}`));
emitter.emit("foo", 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off("foo", addTwoNumbers);
emitter.emit("foo", -3, 9);
