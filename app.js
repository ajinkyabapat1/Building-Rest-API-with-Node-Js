const express = require("express");
const app = express();
const productRoutes= require('./api/routes/product');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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

app.use((req, res, next)=>{
  res.header('Access-control-Allow-Origin','*');
  res.header('Access-control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
if (req.method==='OPTIONS'){
  res.header('Access-control-Allow-Methods','PUT, POST,PATCH,DELETE');
  res.status(200).json({});
}
});
app.use((err,req,res,next)=>{
  res.status(err.status||500);
  res.json({
   error:{
     msg:err.message
   }
  })
})

module.exports=app;
