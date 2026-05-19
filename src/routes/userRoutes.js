// const express = require("express");
// const { getUsers } = require("../controllers/userController");

// const router = express.Router();

// router.get("/users", getUsers);

// module.exports = router;

// const express = require("express");
// const { getUsers, getUser } = require("../controllers/userController");

// const router = express.Router();

// router.get("/users", getUsers);
// router.get("/users/:id", getUser); //user by its id

// module.exports = router;


const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  getAppInfo,
  healthCheck
} = require("../controllers/userController");

const router = express.Router();

router.get("/health", healthCheck);
router.get("/app-info", getAppInfo);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);

module.exports = router;
