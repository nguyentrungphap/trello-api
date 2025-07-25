import express from "express";
const app = express();

const hostname = "localhost";

const port = 8017;

app.get("/", function (req, res) {
  res.send("<h1>Run nodejs</h1>");
});

app.listen(port, hostname, () => {
  console.log(`nodejs running sever at http://${hostname}:${port}/`);
});
