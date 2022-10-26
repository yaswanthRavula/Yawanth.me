const mysql=require('mysql');
const db=mysql.createConnection({
    host:"sql.freedb.tech",
    database:"freedb_Yaswanth_me",
    user:"freedb_Yaswanth",
    password:"BT5x#5ssa%bQn#e",
    port:"3306"
});
db.connect((err)=>{
    if(!err){
        console.log("Database Connected Succesfully!");
    }
    else{
        console.log("Error In database connection ",err);
    }
});
module.exports=db;