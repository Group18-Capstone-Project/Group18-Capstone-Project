const express = require("express");
const router = express.Router();
const reportController = require("../controller/report.controller");
router.get("/getReportByDate", reportController.retrieveReportByDate);
router.get("/getReportByProduct", reportController.retrieveReportByProduct);
router.get("/getReportByEmail", reportController.retrieveReportByEmail);
module.exports = router;
