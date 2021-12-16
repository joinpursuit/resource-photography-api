const express = require("express");

const app = express();

app.use(require("cors")());
app.use(express.json());

app.use("/api/photographers", require("./routes/photographers.routes"));

const { responseHandler } = require("./views/response");
const { errorHandler, notFoundHandler } = require("./views/error");

app.use(responseHandler);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
