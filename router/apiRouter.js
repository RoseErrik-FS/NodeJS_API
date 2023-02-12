const express = require("express");
const {
  apiService,
  apiTitle,
} = require("../services/apiService");
const apiRouter = express.Router();

apiRouter.get("/", (req, res, next) => {
  apiService()
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((error) => {
      res.status(500).json({
        error: {
          message: error.message,
        },
      });
    });
});

apiRouter.get("/:title", (req, res, next) => {
  apiTitle(req.params.title)
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch((err) =>
      res.status(500).json({
        error: {
          message: err.message,
        },
      })
    );
});

module.exports = apiRouter;
