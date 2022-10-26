const express=require("express");
const app=express();
const router=express.Router();
const cors=require('cors');
app.use(cors())
const Review=require("./review");

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
        var result=await Review.getAllReviews();
        res.send(result[0]);
    }catch(Err){
        console.log("Error occured ",Err);
    }
})

module.exports=router;