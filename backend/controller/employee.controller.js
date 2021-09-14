//============= Employee Model ==================
const empModel = require("../model/employee.model");

// TODO: add a generaric password for new employee such as "welcome123";
const addEmployee = async (req, res) => {

    console.log("Adding Employee");
    let employee = req.body;

    //let employee = {}
    console.log(employee);

    // let r = await empModel.find({emailid:employee.emailid});
    // if(r.length != 0){
    //     res.status(200).send({"msg": "New Employee added suceefully"});
    // }else{
    //     console.log("s");
    // }
   
    //console.log("=================")
    //console.log(r);
    //console.log("=================")

    let empWithPass = {...employee, "password":"welcome123"}

    await empModel.insertMany([empWithPass], (e, result) => {
        if(e){
            res.status(400).send({"msg":e});
        }else{
            // send 
            res.status(200).send({"msg": "New Employee added suceefully", "result": result});
            
        }
    });



}

const deleteEmployee = async (req, res) => {

    console.log("Adding Employee");
    let employee = req.body;
    console.log(employee);
    let r = await empModel.deleteOne({emailid: employee.emailid})

    if(r.deletedCount == 0){
        res.status(400).send({"msg": "Employee could not be deleted, please input a valid email id"});
    }else{
        res.status(200).send({"msg": `Employee ${employee.emailid} deleted`})
    }
}

const updateEmployee = async (req, res) => {
    console.log("Updating employee")


}







module.exports = {addEmployee, deleteEmployee} //, updateEmployee, deleteEmployee, getEmployees};