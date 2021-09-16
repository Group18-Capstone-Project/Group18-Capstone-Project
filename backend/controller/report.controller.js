let orderModel = require("../model/order.model");

let retrieveReportByDate = (req, res) => {
    // let report = JSON.parse(req.query.report);
    let report = req.query;
    let start = new Date(report.startDate).getTime();
    let end = new Date(report.endDate).getTime();
    console.log(start);
    console.log(end);
    orderModel.find({}, (err, data) => {
        if (!err) {
            // element.orderPlaced>=report.startDate && element.orderPlaced<=endDate
            let result = data.filter(element=>{
                let time = element.orderPlaced.getTime();
                return time >= start && time <= end;
            });
            res.json(result);
        } else {
            res.json(err);
        }
    })
}

let retrieveReportByProduct = (req, res) => {
    orderModel.find({ [`pOrdered.${req.query.pName}`]: { $exists: true } }, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
}

let retrieveReportByEmail = (request, response) => {
    let UserId = request.query.cEmail;
    orderModel.find({}, (err, data) => {
        if (!err) {
            let result = data.filter(element => element.userId == UserId);
            response.json(result);
        }else {
            response.json(err);
        }
    })
}


module.exports = { retrieveReportByDate, retrieveReportByProduct, retrieveReportByEmail }