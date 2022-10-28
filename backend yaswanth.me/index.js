const express=require('express');
const app=express();
app.use(express.json({extended:false}))
const cors=require('cors');
app.use(cors());
const messageController=require("./message-controller");
const reviewController=require("./review-controller");


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const PORT=process.env.PORT||9000;

app.listen((PORT),()=>{console.log("Port is listeing at 9000")});
app.use("/messages",messageController);
app.use("/reviews",reviewController); 