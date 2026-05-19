const express = require("express");
const userRoutes = require("./routes/userRoutes");
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use("/api", userRoutes);

app.use(errorHandler);

module.exports = app;
