const EventEmitter = require("events");

const emitter4 = new EventEmitter();

emitter4.on("kakoeto-sobytiye", (number) => {
  console.log(
    `Произошло событие 'kakoeto-sobytiye' и получено значение ${number}`
  );
});

emitter4.on("event2", (code, status) => {
  console.log(
    `Произошло событие 'event2', получен код ${code}, статус ${status}`
  );
});

emitter4.emit("kakoeto-sobytiye", 42);
emitter4.emit("event2", 200, "ok");
