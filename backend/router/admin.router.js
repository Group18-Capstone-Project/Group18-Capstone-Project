const express = require("express");
const router = express.Router();

const reqController = require("../controller/request.controller");

router.get("/viewRequest", reqController.fetchAll)


module.exports = router;
