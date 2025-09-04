// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

export default class EventEmitter {
  constructor() {
    this._events = Object.create(null);
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    if (!Object.hasOwn(this._events, eventName)) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(listener);
    return this;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
    if (!Object.hasOwn(this._events, eventName)) {
      return this;
    }

    const listners = this._events[eventName];

    const index = listners.findIndex(
      (listnerItems) => listnerItems === listener
    );
    if (index < 0) {
      return this;
    }
    this._events[eventName].splice(index, 1);
    return this;
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    if (
      !Object.hasOwn(this._events, eventName) ||
      this._events[eventName].length === 0
    ) {
      return false;
    }
    let listners = this._events[eventName].slice();
    listners.forEach((listner) => {
      listner.apply(null, args);
    });
    return true;
  }
}
const emitter = new EventEmitter();

function greet(name) {
  console.log("Hello,", name);
}

emitter.on("welcome", greet);
emitter.emit("welcome", "Alice"); // Output: Hello, Alice

emitter.off("welcome", greet);
emitter.emit("welcome", "Bob");
