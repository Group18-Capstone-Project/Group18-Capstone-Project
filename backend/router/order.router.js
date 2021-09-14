let express = require("express");

let router = express.Router();
let orderController = require("../controller/order.controller");
router.get("/getOrderStatus/:uid", orderController.showOrderStatus);

module.exports=router;