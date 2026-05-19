// function getUsers(req, res) {
//   res.status(200).json({
//     message: "Users fetched successfully",
//     users: [
//       {
//         id: 1,
//         name: "John Doe"
//       },
//       {
//         id: 2,
//         name: "Jane Smith"
//       }
//     ]
//   });
// }

// module.exports = {
//   getUsers
// };


// const userService = require("../services/userService");

// function getUsers(req, res) {
//   const users = userService.getAllUsers();

//   res.status(200).json({
//     message: "Users fetched successfully",
//     users
//   });
// }

// function getUser(req, res) {
//   const user = userService.getUserById(req.params.id);

//   if (!user) {
//     return res.status(404).json({
//       message: "User not found"
//     });
//   }

//   res.status(200).json({
//     message: "User fetched successfully",
//     user
//   });
// }

// module.exports = {
//   getUsers,
//   getUser
// };

// const userService = require("../services/userService");

// function getUsers(req, res) {
//   const users = userService.getAllUsers();

//   res.status(200).json({
//     message: "Users fetched successfully",
//     users
//   });
// }

// function getUser(req, res, next) {
//   const user = userService.getUserById(req.params.id);

//   if (!user) {
//     const error = new Error("User not found");
//     error.statusCode = 404;
//     return next(error);
//   }

//   res.status(200).json({
//     message: "User fetched successfully",
//     user
//   });
// }

// module.exports = {
//   getUsers,
//   getUser
// };


const userService = require("../services/userService");
const appConfig = require("../config/appConfig");

function getUsers(req, res) {
  const users = userService.getAllUsers();

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users
  });
}

function getUser(req, res, next) {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user
  });
}

function createUser(req, res, next) {
  const { name, email } = req.body;

  if (!name || !email) {
    const error = new Error("Name and email are required");
    error.statusCode = 400;
    return next(error);
  }

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: {
      id: 3,
      name,
      email
    }
  });
}

function getAppInfo(req, res) {
  res.status(200).json({
    success: true,
    message: "Application configuration loaded successfully",
    data: {
      appName: appConfig.appName,
      environment: appConfig.nodeEnv,
      port: appConfig.port
    }
  });
}

function healthCheck(req, res) {
  res.status(200).json({
    success: true,
    message: "API is running",
    environment: appConfig.nodeEnv
  });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  getAppInfo,
  healthCheck
};
