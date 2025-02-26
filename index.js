const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ server: "EC2", message: "HELLO from EC2" });
});

app.get("/home", (req, res) => {
  res.send("this is the home page");
});

app.get("/post", (req, res) => {
  res.send("this is the new endpoint.");
});

app.listen(3000, () => {
  console.log("server is ready at port 3000");
});
