import Express from "express";

const app = Express();

app.listen(5000, () => {
  console.log("Server has started", 5000);
});

app.get("/start", (req, res) => {
  res.json({
    result: "successful result",
  });
});
