//============= Employee Model ==================
const empModel = require("../model/employee.model");

// TODO: add a generaric password for new employee such as "welcome123";
const addEmployee = async (req, res) => {

    console.log("Adding Employee");
    let employee = req.body;
    //let employee = {}
    console.log(employee);
    let r = await empModel.insertMany([employee], (e, result) => {
        if(e){
            res.status(400).send({"msg":e.writeErrors[0].errmsg});
        }else{
            res.status(200).send({"msg": "New Employee added suceefully"});
            
        }
    });

}




module.exports = {addEmployee} //, updateEmployee, deleteEmployee, getEmployees};