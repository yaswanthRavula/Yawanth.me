const express=require('express');
const app=express();
const path=require('path');
const router=express.Router();
const bodyParser=require('body-parser');
app.use(bodyParser.json())
const cors=require('cors');
const http=require('http');
app.use(cors());


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
const messageController=require("./message-controller");
const reviewController=require("./review-controller");
const PORT=process.env.PORT||9000;

app.listen((PORT),()=>{console.log("Port is listeing at 9000")});
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.get("/",(req,res)=>{
    res.send("Connected Succesfully");
    console.log("Called get in base router")
})
app.use("/messages",messageController);
app.use("/reviews",reviewController);
module.exports=router;