const express=require("express");
const app=express();
const router=express.Router();
const cors=require('cors');
app.use(cors())
const Review=require("./review");
const connection=require("./database");

router.post("/",async (req,res)=>{
    const name=req.body.name;
    const review =req.body.description;
    try{
      await Review.postReview(name, review);
      res.send("true");

    }catch(Err){
        console.log("Erro occured",Err);
    }
})

router.get("/",cors(), async (req,res)=>{
    try{
       connection.query("SELECT * FROM reviews",function(request,result){
        res.send(result);
       })
    }catch(Err){
        console.log("Error occured ",Err);
    }
})

module.exports=router;