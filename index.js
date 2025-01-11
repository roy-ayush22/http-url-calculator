const express = require("express");
const app = express();

app.use(express.json());

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.get("/sub", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a - b,
  });
});

app.get("/mul", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a * b,
  });
});

app.get("/div", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a / b,
  });
});

app.get("/square", (req, res) => {
  const a = parseInt(req.query.a);

  res.json({
    answer: a * a,
  });
});

app.get("/cube", (req, res) => {
  const a = parseInt(req.query.a);

  res.json({
    answer: a * a * a,
  });
});

app.listen(3000);
