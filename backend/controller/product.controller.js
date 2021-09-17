
const proModel = require("../model/product.model");

let addProduct = (request,response)=> {
    let product = request.body;
    console.log(product);
    proModel.insertMany(product,(err,result)=> {
        if(!err){
                response.send("Added successfully")
        }else {
                response.send(err);
        }
    })
}
let deleteProduct = (request,response)=> {
    let pCode = request.params.productCode;
    proModel.deleteOne({productCode: pCode},(err,result)=> {
        if(!err){
            response.send("Deleted Successfully")
        }else {
            response.send(err);

        }
    })
 }


let getAll = async (req, res, next) => {

	const query = proModel.find({});

	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)

};



let updateProduct = (request,response)=> {
    let product = request.body;
    console.log(product);
    var myquery = { productCode: product.productCode };
    proModel.updateOne(myquery,{$set:{price:product.price,quantity:product.quantity,discount:product.quantity}},(err,result)=> {
        if(!err){
            response.send("Updated Product Successfully");
        }else {
            response.send(err);
        }
    })
}

module.exports= {addProduct,deleteProduct,updateProduct,getAll}

