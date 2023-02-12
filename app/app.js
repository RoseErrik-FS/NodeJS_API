const express = require("express");
const apiRouter = require("../router/apiRouter");

const app = express();
// calling http://localhost:3000
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Service is running" });
});

// router middleware
app.use("/api", apiRouter);


// adding middleware for errorsand bad url requests
app.use((reg, res, next) => {
  const error = new Error("NOT FOUND!!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

module.exports = app;
