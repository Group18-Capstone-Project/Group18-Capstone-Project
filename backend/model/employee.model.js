const mongoose = require("mongoose");

mongoose.pluralize(null);


const employeeSchema = mongoose.Schema({
        fname:    String,
        lname:    String,
        emailid:  String,
        password: String
})


const employeeModel = mongoose.model("Employee", employeeSchema);


module.exports = employeeModel;