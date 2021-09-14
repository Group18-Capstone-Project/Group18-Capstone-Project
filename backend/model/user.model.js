let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    dob: { type: String },
    phone: { type: Number },
    address: { type: String },
    locked: { type: Boolean, default: false }
});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;