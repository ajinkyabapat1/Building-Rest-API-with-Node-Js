const express =require('express');
const route=express.Router();
route.get('/',(req,res,next)=>{
  res.status(200).json({
    msg:'orders were fetched '
  })

})
route.post('/',(req,res,next)=>{
  const order={
    name:req.body.name,
    price:req.body.price
  }
  res.status(201).json({
    msg:'orders were posted ',
    orderCreated:order
  })

})
route.delete('/',(req,res,next)=>{
  res.status(200).json({
    msg:'orders were deleted',

  })

})
module.exports=route;
