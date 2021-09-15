let express = require("express");
let router = express.Router();

let productController = require("../controller/product.controller");



router.post("/addProduct", productController.addProduct);
router.delete("/deleteProduct", productController.deleteProduct);
router.put("/updateProduct",productController.updateProduct);
router.get("/getAllProducts",productController.getAll);


module.exports = router;
