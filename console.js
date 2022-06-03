console.clear();

console.log("Всем привет!");

console.error(new Error("Упс, что-то пошло не так..."));

const data = [
  {
    name: "Иванов",
    phone: "+7123 456 78 90",
  },
  {
    name: "Петров",
    phone: "+7123 098 76 54",
  },
  {
    name: "Сидоров",
    phone: "+7123 456 12 34",
  },
];

console.log(data);
console.table(data);

console.log("\x1b[43m %s \x1b[0m", "привет!");

console.log("Всем %s", "привет!");
console.log("Всем %d", 123);
