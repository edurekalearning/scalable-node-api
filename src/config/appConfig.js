// const appConfig = {
//   port: 3000,
//   appName: "Scalable Node API"
// };

// module.exports = appConfig;

// require("dotenv").config();

// const appConfig = {
//   port: process.env.PORT || 3000,
//   appName: process.env.APP_NAME || "Node API",
//   jwtSecret: process.env.JWT_SECRET,
//   nodeEnv: process.env.NODE_ENV || "development"
// };

// module.exports = appConfig;

require("dotenv").config();

const appConfig = {
  port: process.env.PORT || 3000,
  appName: process.env.APP_NAME || "Node API",
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || "development"
};

module.exports = appConfig;
