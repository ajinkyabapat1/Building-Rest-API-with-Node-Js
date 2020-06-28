const express = require("express");
const app = express();
const productRoutes= require('./api/routes/product');

const orderRoute=require('./api/routes/orders');
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "it works",
//   });
// });

app.use('/products',productRoutes);

app.use('/orders',orderRoute);

module.exports=app;
