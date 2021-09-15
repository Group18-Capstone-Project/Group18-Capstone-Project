// lode module file

const { response } = require("express");
let productModel = require("../model/product.model")

let getAll = async (req, res, next) => {

	const query = productModel.find({});

	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)

};

// aakash

// let getAllProductDetails =(request,response)=>{

//     productModel.find({},(err,data)=>{
//         if(!err){
//             response.json(data);
//         }
//         else{
//             response.json(err);
//         }
//     })

// }


let storeProduct =(req,res)=>{
    let product=req.body;

    productModel.insertMany(product,(err,result)=>{
        if(!err){
            res.send("record stored");

        }
        else{
            res.send(err);
        }
    })
}




module.exports = {getAll,storeProduct}