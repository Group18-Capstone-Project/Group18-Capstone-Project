const mongoose = require("mongoose");

mongoose.pluralize(null);


const employeeSchema = mongoose.Schema({
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        emailid: { type: String, unique: true, required: true },
        password: { type: String, default: "welcome123" },
})


const employeeModel = mongoose.model("Employee", employeeSchema);


module.exports = employeeModel;