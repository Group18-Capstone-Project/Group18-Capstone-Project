const express = require("express");
const router = express.Router();

//================= Employee Controller =====================
const empController = require("../controller/employee.controller");


//============ CRUD Operation on Emplyee ===================
router.post("/addEmployee", empController.addEmployee)
router.delete("/deleteEmployee", empController.deleteEmployee)




module.exports = router;