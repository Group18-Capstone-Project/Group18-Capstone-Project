const mongoose = require("mongoose");

mongoose.pluralize(null);


const employeeSchema = mongoose.Schema({
        fname:    { type : String , unique : false, required : true},
        lname:    { type : String , unique : false, required : true},
        emailid:  { type : String , unique : true, required : true},
        password: { type : String , required : true},
})


const employeeModel = mongoose.model("Employee", employeeSchema);


module.exports = employeeModel;