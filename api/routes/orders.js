const express =require('express');
const route=express.Router();
route.get('/',(req,res,next)=>{
  res.status(200).json({
    msg:'orders were fetched '
  })

})
route.post('/',(req,res,next)=>{
  res.status(201).json({
    msg:'orders were posted '
  })

})
route.delete('/',(req,res,next)=>{
  res.status(200).json({
    msg:'orders were deleted'
  })

})
module.exports=route;
