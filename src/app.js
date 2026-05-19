const express = require("express");
const userRoutes = require("./routes/userRoutes");
const monitoringRoutes = require("./routes/monitoringRoutes");
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use((req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
  });

  next();
});

app.use("/api", userRoutes);
app.use("/api/monitoring", monitoringRoutes);

app.use(errorHandler);

module.exports = app;
