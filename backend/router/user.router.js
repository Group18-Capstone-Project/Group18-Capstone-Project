let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");
let orderController = require("../controller/order.controller");

router.post("/signIn",userController.signIn);
router.post("/signUp",userController.signUp);
router.put("/updateUser", userController.updateDetails);
router.put("/updateAccountLocked", userController.updateAccountLocked);
router.post("/addTicket", userController.raiseTicket);
router.post("/addOrder", orderController.addOrder);

module.exports=router;