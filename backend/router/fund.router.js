const express = require("express");
const router = express.Router();

const fundController = require("../controller/fund.controller");

router.put("/addFunds", fundController.addFunds);

module.exports = router;