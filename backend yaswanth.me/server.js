const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
const cors=require('cors');
const http=require('http');
app.use(cors());

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname))
})

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  const server=http.createServer(app);
  
const messageController=require("./message-controller");
const reviewController=require("./review-controller");
const PORT=process.env.PORT||9000;

server.listen((PORT),()=>{console.log("Port is listeing at ",process.env.PORT)});
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
app.use("/messages",messageController);
app.use("/reviews",reviewController);