// function errorHandler(err, req, res, next) {
//   const statusCode = err.statusCode || 500; //default server error

//   res.status(statusCode).json({
//     success: false,
//     message: err.message || "Something went wrong",
//     statusCode: statusCode,
//     path: req.originalUrl
//   });
// }

// module.exports = errorHandler;


const logger = require("../utils/logger");
const appConfig = require("../config/appConfig");

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  logger.error({
    message: err.message,
    statusCode: statusCode,
    path: req.originalUrl,
    method: req.method
  });

  res.status(statusCode).json({
    success: false,
    message:
      appConfig.nodeEnv === "production" && statusCode === 500
        ? "Internal server error"
        : err.message || "Something went wrong",
    statusCode: statusCode,
    path: req.originalUrl
  });
}

module.exports = errorHandler;
