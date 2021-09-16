let orderModel = require("../model/order.model");

let retrieveReportByDate = (req, res) => {
    // let report = JSON.parse(req.query.report);
    let report = req.query;
    console.log(report);
    let r = orderModel.find({ "orderPlaced": { $gte: report.startDate, $lte: report.endDate } }, (err, data) => {
        if (!err) {
            res.json(data);
            console.log(data);
        } else {
            res.json(err);
        }
    })
}

let retrieveReportByProduct = (req, res) => {
    let report = JSON.parse(req.query.report);
    orderModel.find({ [`pOrdered.${report.pName}`] : { $exists : true }  }, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
}

let retrieveReportByEmail = (req, res) => {
    console.log(req.query);
    let report = JSON.parse(req.query.report);
    orderModel.find({ "userId":report.cEmail}, (err, data) => {
        if (!err) {
            res.json(data);
            console.log(data);
        } else {
            res.json(err);
        }
    })
}

module.exports = { retrieveReportByDate, retrieveReportByProduct, retrieveReportByEmail }