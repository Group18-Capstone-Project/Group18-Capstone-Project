let mongoose = require("mongoose");

mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    name: { type: String },
    img: {type: String},
    price: { type: Number },
    quantity: { type: Number },
    discount: { type: Number, default: 1 } // set default to 1 means no discount, 0.8 means 20% off, 0.6 means 40% off
});



let productModel = mongoose.model("Product", productSchema);

module.exports = productModel;