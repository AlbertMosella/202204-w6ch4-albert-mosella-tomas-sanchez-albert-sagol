const chalk = require("chalk");
const express = require("express");

const app = express();

require("dotenv").config();
const debug = require("debug")("cosas-que-aprendi");

app.use((req, res, next) => {
  debug("Ha llegado una request");
  next();
});

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "pete" });
};

module.exports = {
  notFoundError,
  generalError,
};
