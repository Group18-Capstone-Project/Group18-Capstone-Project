let orderModel = require("../model/order.model");

let retrieveReportByDate = (req, res) => {
    // let report = JSON.parse(req.query.report);
    let report = req.query;
    console.log(report.startDate);
    console.log(report.endDate);
    orderModel.find({ orderPlaced: { $gte: report.startDate, $lte: report.endDate } }, (err, data) => {
        if (!err) {
            res.json(data);
            console.log(data);
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

let retrieveReportByEmail = (req, res) => {
    console.log(req.query.cEmail);
    orderModel.find({ userId:req.query.cEmail }, (err, result) => {
        if (!err) {
            res.json(result);
            console.log(result);
        } else {
            res.json(err);
        }
    })
};

module.exports = { retrieveReportByDate, retrieveReportByProduct, retrieveReportByEmail }