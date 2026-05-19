const express = require("express");
const { getPerformanceStatus } = require("../controllers/monitoringController");

const router = express.Router();

router.get("/performance", getPerformanceStatus);

module.exports = router;
