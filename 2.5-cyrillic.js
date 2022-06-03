const EventEmitter = require("events");

const emitter2 = new EventEmitter();

emitter2.on("СобытиеПервое", () => {
  console.log("Произошло событие первое!");
});

emitter2.emit("СобытиеПервое");
