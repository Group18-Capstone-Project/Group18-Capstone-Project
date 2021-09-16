const express = require("express");
const router = express.Router();

//================= Controllers =====================
const empController = require("../controller/employee.controller");
const reqController = require("../controller/request.controller");
const orderController = require("../controller/order.controller");

//============ CRUD Operation =======================
// Employee
router.post("/addEmployee", empController.addEmployee)
router.delete("/deleteEmployee/:emailid", empController.deleteEmployee);
router.put("/updatePassword", empController.updateEmployee);
router.get("/lockedAccount", empController.getUsersWithLockedAccount);
router.get("/getTickets", empController.getTickets);
router.put("/unlockUser", empController.unlockUser);
router.get("/getOrders", empController.getOrders);

// Request
router.post("/sendProductRequest", reqController.sendProductRequest)

// Order
router.put("/updateOrderStatus", orderController.updateOrderStatus)


router.post("/signIn", empController.checkEmployee);

module.exports = router;