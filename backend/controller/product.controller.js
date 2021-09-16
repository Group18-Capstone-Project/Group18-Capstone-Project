
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



let updateProduct = (request,response)=> {
    let product = request.body;
    var myquery = { productCode: product.productCode };
    proModel.updateOne(myquery,{$set:{price:product.price}}, {$set:{quantity:product.quantity}},{$set:{discount:product.quantity}},(err,result)=> {
        if(!err){
            response.send("Update Product: "+product.productCode);
        }else {
            response.send(err);
        }
    })
}

module.exports= {addProduct,deleteProduct,updateProduct,getAll}

