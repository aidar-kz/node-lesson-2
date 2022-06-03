const EventEmitter = require("events");

const emitter3 = new EventEmitter();

function cb1() {
  console.log("Произошло событие, привет из cb1()");
}

function cb2() {
  console.log("Произошло событие, привет из cb2()");
}

emitter3.on("eventOne", cb1); // Подписываемся на событие `eventOne`
// emitter3.once("eventOne", cb2); // Подписываемся на событие `eventOne`

console.clear();

emitter3.emit("eventOne");

emitter3.off("eventOne", cb1);

emitter3.emit("eventOne");
