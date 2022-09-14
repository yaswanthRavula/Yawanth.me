const express=require("express");
const router=express.Router();
const Review=require("./review");

router.post("/",async (req,res)=>{
    const name=req.body.name;
    const review =req.body.description;
    try{
      await Review.postReview(name, review);

    }catch(Err){
        console.log("Erro occured",Err);
    }
})

router.get("/", async (req,res)=>{
    try{
        const reviews=await Review.getAllReviews();
        res.send(reviews[0]);
        console.log(reviews[0])
    }catch(Err){
        console.log("Error occured ",Err);
    }
})

module.exports=router;