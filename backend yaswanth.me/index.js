const express=require('express');
const app=express();
app.use(express.json({extended:false}))
const messageController=require("./message-controller");
const reviewController=require("./review-controller");

const PORT=process.env.PORT||9000;

app.listen((PORT),()=>{console.log("Port is listeing at 9000")});
app.use("/messages",messageController);
app.use("/reviews",reviewController); 