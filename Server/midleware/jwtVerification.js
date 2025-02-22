let express = require("express");
var UserRouter = express.Router();
const jwt = require("jsonwebtoken")
const  tokenVerification = (req,res,next)=>{
   console.log(req.body,"bodyyy")
   console.log(req.headers.authorization,"headers")
   let authorization =req.headers.authorization
   if(!authorization){
    res.status(401).send({error:"Token not Provided"})
   }else{
  
    let token=authorization.split(" ")[1]
    let verified= jwt.verify(token,"secret")
   if(verified){
    // const decoded = jwt.decode(token);
    // console.log(JSON.stringify(decoded, null, 2),"decoderde"); 

     next()
   }else{
    res.status(500).send({ message:"Invalid"})
   }
    
    // jwt.sign(token,"secret",(err,decode)=>{
    //   if(err){
       
    //   }else{
      
    //   }
    // })   
}
 
  

}
module.exports={
    tokenVerification
}
