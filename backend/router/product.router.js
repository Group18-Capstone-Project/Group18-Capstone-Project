let express = require("express");

let router = express.Router();

let productController = require("../controller/product.controller");

router.get("/getAllProducts",productController.getAll);

// router.get("/getAllProductDetails",productController.getAllProductDetails);


router.post("/storeProduct",productController.storeProduct);


module.exports = router;
