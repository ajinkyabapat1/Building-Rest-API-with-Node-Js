const express =require('express');
const route=express.Router();
route.get('/',(req, res,next)=>{
res.status(200).json({
  msg:"products url hits with get"
})
});


route.post('/',(req, res,next)=>{
  res.status(200).json({
    msg:"products url hits with post"
  })
  });

 route.get('/:productID',(req,res,next)=>{
   const id= req.params.productID;
   if (id==='special'){
     res.status(200).json({
       msg:'you have purchased special product',
       id:id
     })
   }
   else{
     res.status(200).json({
      msg:'you purchansed normal order',
      id:id
     })

   }
 })

 route.patch('/:productID',(req,res,next)=>{
  res.status(200).json({
    msg:'Product updated'
  })
})

route.delete('/:productID',(req,res,next)=>{
  res.status(200).json({
    msg:'Product deleted'
  })
})

module.exports=route;
