import express from "express";

const app = express();
const port = 5111;

app.get("/", (req, res) => {
  res.send(`I'm up!!`);
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
