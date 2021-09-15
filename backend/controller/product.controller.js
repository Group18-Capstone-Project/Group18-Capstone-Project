
const proModel = require("../model/product.model");

let addProduct = (request,response)=> {
    let product = request.body;

    proModel.insertMany(product,(err,result)=> {
        if(!err){
                response.send("Added successfully")
        }else {
                response.send(err);
        }
    })
}
let deleteProduct = (request,response)=> {
    let pid = request.params.pid;
    proModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            response.send(result)
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
    proModel.updateOne({_id:product._id},{$set:{price:product.price}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

module.exports= {addProduct,deleteProduct,updateProduct,getAll}

