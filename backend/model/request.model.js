let mongoose = require("mongoose");

mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    description:{type:String, required:true}, // description should include the product id, product price, product name and etc..
    _id:{type:Number}
});

let requestModel = mongoose.model("Request", requestSchema);

module.exports = requestModel;