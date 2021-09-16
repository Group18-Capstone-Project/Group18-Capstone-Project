let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

router.post("/signIn",userController.signIn);
router.post("/signUp",userController.signUp);
router.put("/updateUser", userController.updateDetails);
router.put("/updateAccountLocked", userController.updateAccountLocked);
router.post("/addTicket", userController.raiseTicket);

module.exports=router;