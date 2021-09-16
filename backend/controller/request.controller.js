//============= request Model ==================
const reqModel = require("../model/request.model");


const sendProductRequest = async (req, res) => {
    console.log("Sending Requests");
    let productRequest = req.body;
    console.log(productRequest);

    await reqModel.insertMany([productRequest], (e, result) => {
        if(e){
            res.status(400).send({"msg":e});
        }else{
            res.status(200).send({"msg": "New request added suceefully", "result": result});            
        }
    });
}
const fetchAll = async (req, res, next) => {

    const query = reqModel.find({});

    query.exec()
        .then(doc => res.status(200).json(doc))
        .catch(next)

};


module.exports = {sendProductRequest};