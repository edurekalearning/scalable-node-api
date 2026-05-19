// const app = require("./src/app");
// const appConfig = require("./src/config/appConfig");

// app.listen(appConfig.port, () => {
//   console.log(`${appConfig.appName} is running on port ${appConfig.port}`);
// });

const app = require("./src/app");
const appConfig = require("./src/config/appConfig");
const logger = require("./src/utils/logger");

app.listen(appConfig.port, () => {
  logger.info(`${appConfig.appName} is running on port ${appConfig.port}`);
  console.log(`${appConfig.appName} is running on port ${appConfig.port}`);
});

