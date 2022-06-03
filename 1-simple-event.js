// Подключая модуль events - получаем класс EventEmitter
const EventEmitter = require("events");

// Используем конструктор чтобы создать эмиттер
const myEmitter = new EventEmitter();
const emitter2 = new EventEmitter();

// Добавляем слушателя
myEmitter.on("someEvent", () => {
  console.log("Произошло событие someEvent");
});

// Добавляем слушателя
emitter2.on("event2", () => {
  console.log("Произошло событие event2");
});

// Генерируем события
myEmitter.emit("someEvent");
emitter2.emit("event2");
