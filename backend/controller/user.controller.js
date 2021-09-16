let userModel = require("../model/user.model");
let ticketModel = require("../model/ticket.model");

let signUp = async (request, response) => {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({ email: user.email });
    if (userInfo == null) {
        let result = await userModel.insertMany(user);
        response.send("Account created successfully");
    } else {
        response.send("Email ID must be unqiue");
    }
}

let signIn = async (request, response) => {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({ email: user.email, password: user.password, locked: false });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("InValid username or password, please try again. (if your account is locked please raise the ticket)");
    }
}


//Updates the user's details based on unique email ID, multiple things can be updated or just one
let updateDetails = (request, response) => {
    let user = request.body;
    userModel.updateOne({ email: user.email }, { $set: { password: user.password } }, { $set: { dob: user.dob } }, { $set: { address: user.address } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(error);
        }
    })
}

let updateAccountLocked = (req, res) => {
    let user = req.body;
    userModel.updateOne({ email: user.email }, { $set: { locked: user.isLocked } }, (err, result) => {
        if (result.modifiedCount == 1 || result.matchedCount == 1) {
            res.send("Success");
        } else {
            res.send(error);
        }
    })
}

let raiseTicket = async (req, res) => {
    console.log(req.body);
    let result = await ticketModel.insertMany(req.body);
    if (result) {
        res.send("Ticket raised successfully");
        console.log(result);
    } else {
        res.send("Ticket raised failed");
    }
}

module.exports = { signIn, signUp, updateDetails, updateAccountLocked, raiseTicket }