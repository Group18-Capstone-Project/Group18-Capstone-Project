//============= Models ==================
const empModel = require("../model/employee.model");
const ticketModel = require("../model/ticket.model");
const usrModel = require("../model/user.model");
const orderModel = require("../model/order.model");

// DONE: add a generaric password for new employee such as "welcome123";
const addEmployee = async (req, res) => {
    console.log("Adding Employee");
    let employee = req.body;
    console.log(employee);
    let empWithPass = {...employee, "password":"welcome123"};
    await empModel.insertMany([empWithPass], (e, result) => {
        if(e){
            res.status(400).send({"msg":e});
        }else{
            // send 
            res.status(200).send({"msg": "New Employee added suceefully", "result": result});
        }
    });
}

// Deleting the Employee by emailid
const deleteEmployee = async (req, res) => {
    let deletedEid = req.params.emailid;
    let r = await empModel.deleteOne({emailid: deletedEid});
    if(r.deletedCount == 0){
        res.status(400).send({"msg": "Employee could not be deleted, please input a valid email id"});
    }else{
        res.status(200).send({"msg": `Employee ${deletedEid} deleted`})
    }
}

const updateEmployee = async (req, res) => {
    console.log("Updating employee")
    let employee = req.body;
    let r = await empModel.updateOne({emailid: employee.emailid}, {password: employee.password})
    if(r.matchedCount == 0){
        res.status(400).send({"msg": `employee with id:${employee.emailid} does not exist`});
    }else{
        if(r.modifiedCount != 0){
            res.status(200).send({"msg": "employe password updated", "status":"Success"});
        }
    }

}

const checkEmployee = async (request, response) =>{
    let emp = request.body;
    console.log(emp)
    let empInfo = await empModel.findOne({emailid:emp.emailid, password:emp.password});
    console.log(empInfo)
    if(empInfo != null){
        response.send("Success");
    }else{
        response.send("Invalid Employee ID or password");
    }
}


const getUsersWithLockedAccount = async (req, res) => {
    let urs = await usrModel.find({ locked:{$eq : true}});
    res.send(urs);
}


const getTickets = async (req, res) => {
    let ticket = await ticketModel.find({});
    res.send(ticket);
}


const unlockUser = async (req, res) => {
    console.log("Unlocking user")
    let usr = req.body;
    console.log(usr)
    let r = await usrModel.updateOne({email: usr.email}, {locked: false});
    if(r.matchedCount == 0){
        res.status(400).send({"msg": `employee with id:${usr.email} does not exist`});
    }else{
        if(r.modifiedCount != 0){
            res.status(200).send({"msg": "users's account unlocked", "status":"Success"});
        }
    }
}

const getOrders = async (req, res) => {
    let orders = await orderModel.find({});
    res.send(orders);
}




module.exports = {addEmployee, deleteEmployee, checkEmployee, updateEmployee, getUsersWithLockedAccount, getTickets, unlockUser, getOrders} //, updateEmployee, deleteEmployee, getEmployees};

