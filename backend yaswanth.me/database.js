const mysql=require('mysql2');
const db=mysql.createConnection({
    host:"localhost",
    database:"yaswanth_me",
    user:"yaswanth",
    password:"Yy@8309328761"
});
db.connect((err)=>{
    if(err){
        console.log("Error is raised in connection", err)
    }
});
module.exports=db;