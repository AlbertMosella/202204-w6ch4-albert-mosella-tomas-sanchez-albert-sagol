require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("cosas-que-aprendi:root");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares");
const thingsRouter = require("./routers/thingsRouters");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Server listening on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Ha petao el server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port} busy`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use("/things", thingsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = {
  initializeServer,
};
