const orderModel = require("../model/order.model");


const updateOrderStatus = async (req, res) => {
    console.log("Update Order Statu");
    let order = req.body;
    console.log(order);

    let r = await orderModel.updateOne({userId:order.userId}, {status: order.status});

    if(r.matchedCount == 0){
        res.status(400).send({"msg": `order with userid:${order.userId} does not exist`});
    }else{
        if(r.modifiedCount != 0){
            res.status(200).send({"msg": "order updated"});
        }
    }


}


module.exports = {updateOrderStatus};