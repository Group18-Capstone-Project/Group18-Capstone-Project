let mongoose = require("mongoose");

mongoose.pluralize(null);

let fundSchema = mongoose.Schema({
    userId: { type: String },
    account: {type: Number, unique:true},
    amount: {type:Number}
});

let fundModel = mongoose.model("Fund", fundSchema);

module.exports = fundModel;