const express = require("express");
const router = express.Router();

//================= Controllers =====================
const empController = require("../controller/employee.controller");
const reqController = require("../controller/request.controller");
const orderController = require("../controller/order.controller");

//============ CRUD Operation =======================
// Employee
router.post("/addEmployee", empController.addEmployee)
router.delete("/deleteEmployee", empController.deleteEmployee);

// Request
router.post("/sendProductRequest", reqController.sendProductRequest)

// Order
router.put("/updateOrderStatus", orderController.updateOrderStatus)




module.exports = router;