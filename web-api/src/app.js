const express = require('express');
const bodyParser = require("body-parser");
const CategoryRoutes = require("./Admin/Routes/CategoryRoutes");
const OrderRoutes = require("./Admin/Routes/OrderRoutes");
const ProductRoutes = require("./Admin/Routes/ProductRoutes");
const UsersRoutes = require("./Admin/Routes/UsersRoutes");
const chalk = require("chalk");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.use("/category",CategoryRoutes)
app.use("/order", OrderRoutes)
app.use("/product", ProductRoutes)
app.use("/user", UsersRoutes)




app.listen(4000, ()=>{
    console.log(chalk.greenBright("server is started"))
})