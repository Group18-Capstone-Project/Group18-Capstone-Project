const express = require("express");
const router = express.Router();

const reqController = require("../controller/request.controller");
const reportController = require("../controller/report.controller");

router.get("/viewRequest", reqController.fetchAll)
router.get("/getReportByDate", reportController.retrieveReportByDate);
router.get("/getReportByProduct", reportController.retrieveReportByProduct);
router.get("/getReportByEmail", reportController.retrieveReportByEmail);

module.exports = router;
