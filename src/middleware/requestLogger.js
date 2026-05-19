const morgan = require("morgan"); //useful information 

const requestLogger = morgan("dev");

module.exports = requestLogger;
