const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // const { method, url, headers } = req;
  // console.log("Метод:", method); // GET, POST, PUT, DELETE
  // console.log("URL:", url);
  // console.log(headers["user-agent"]);

  const data = url.parse(req.url, true);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf8");

  if (data.query.name) {
    res.end(`<h1>Привет, ${data.query.name}</h1>`);
  } else if (req.url === "/html") {
    res.end("<h1>HTML - это гипертекстовый язык разметки</h1>");
  } else if (req.url === "/css") {
    res.end("<h1>CSS - это каскадная таблица стилей</h1>");
  } else {
    res.end("<h1 style='color: green'>Привет от сервера!</h1>");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
