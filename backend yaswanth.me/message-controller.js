const express=require("express");
const router=express.Router();
const Message=require("./message");
const connection =require('./database');
router.post("/",async(req,res)=>{
    const name=req.body.name;
    const number=req.body.number;
    const mail = req.body.mail;
    const description = req.body.description;
    try{
        await Message.postMessage(name,number, mail, description);
        res.send("true");
    }catch(Err){
        console.log(Err);
        res.send("false");
    }
})

router.get("/", async(req,res)=>{
    try{
        connection.query("SELECT * FROM messages",function(request,result){
         res.send(result);
        })
     }catch(Err){
         console.log("Error occured ",Err);
     }
})
module.exports=router;