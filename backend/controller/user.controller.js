let userModel = require("../model/user.model");

let signUp = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({email:user.email});
    if(userInfo==null){
        let result = await userModel.insertMany(user);
        response.send("Account created successfully");
    }else {
        response.send("Email ID must be unqiue");
    }    
}

let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({email:user.email,password:user.password});
    if(userInfo!=null){
        response.send("Success");      
    }else {
        response.send("InValid username or password, please try again.");
    }
}


//Updates the user's details based on unique email ID, multiple things can be updated or just one
let updateDetails = (request, response) =>{
    let user = request.body;
    userModel.updateOne({email:user.email}, {$set:{password:user.password, dob:user.dob, address:user.address}}, (err, result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(error);
        }
    })
}

module.exports={signIn,signUp, updateDetails}