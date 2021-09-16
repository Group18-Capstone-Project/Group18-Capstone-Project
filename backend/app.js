const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = 9090;


//================= Routers =====================
const adminRouter = require("./router/admin.router");
const employeeRouter = require("./router/employee.router");
const userRouter = require("./router/user.router");
const routerProduct = require("./router/product.router");
const fundRouter = require("./router/fund.router");



//================= Middlewears ================
app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//================= Databse ====================
const db = "group18db"
let dbUrl = `mongodb://localhost:27017/${db}`;

// connect to the databse
mongoose.connect(dbUrl)
    .then(res => {
        console.log(`Connected to ${dbUrl}`) ;
    })
    .catch(e => {
        console.log(e);
    });

    // http://localhost:9090/api/product/getAllProducts

    // http://localhost:9090/api/product/storeProduct


app.use("/api/admin", adminRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/user", userRouter);
app.use("/api/product",routerProduct);
app.use("/api/fund", fundRouter);




app.listen(PORT, () => {
   console.log(`Servering is listening on port ${PORT}`);
})