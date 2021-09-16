let fundModel = require("../model/fund.model");


//Checks userId and account number then adds amount listed in frontend to already existing account amount
let addFunds = async (request, response)=>{
    let user = request.body;
    
    let userAccount = await fundModel.findOne({userId:user.userId, account:user.account});
    
    if(userAccount!=null){
        let newAmount = userAccount.amount+user.amount;
        fundModel.updateOne({userId:user.userId}, {$set:{amount:newAmount}}, (err, result) =>{
            if(!err){
                response.send("Amount Added Successfully");
            }else{
                response.send(err);
            }
        });
        
    }else{
        response.send("Account Number or User Id is incorrect");
    }
}

module.exports={addFunds};