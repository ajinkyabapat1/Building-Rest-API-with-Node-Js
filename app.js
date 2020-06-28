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
app.use((req,res,next)=>{
  const err= new Error('Page Not Found');
  err.status=404;
 next(err);
})

app.use((err,req,res,next)=>{
  res.status(err.status||500);
  res.json({
   error:{
     msg:err.message
   }
  })
})

module.exports=app;
