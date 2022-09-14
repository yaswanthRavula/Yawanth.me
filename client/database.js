const mysql=require('mysql2');
const pool=mysql.createPool({
    host:"localhost",
    database:"yaswanth_me",
    user:"root",
    password:"Yy@8309328761"
})
module.exports=pool.promise();