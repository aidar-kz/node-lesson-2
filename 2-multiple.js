const EventEmitter = require("events");

const emitter123 = new EventEmitter();

emitter123.on("someEvent", () => {
  console.log("Привет от функции 1");
});

emitter123.on("someEvent", () => {
  console.log("Привет от функции 2");
});

console.clear();

emitter123.emit("someEvent");
