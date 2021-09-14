let mongoose = require("mongoose");

mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    userId: { type: String },
    pOdered: {type:Map, of:String}, // product map ordered by user, {"apple"=>"5", "banana"=>"1"}
    pTotalPrice:{type: Number}, // total price of the products ordered
    pQuantity:{type: Number}, // the number of products ordered, total items
    status:{type: String}, // status: delivered, shipped, out for delivery and etc.
    orderPlaced: { type: Date, default: Date.now } // when the order is placed
});

let orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;