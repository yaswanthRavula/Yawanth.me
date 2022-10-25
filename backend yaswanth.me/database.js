const mysql=require('mysql2');
const db=mysql.createConnection({
    host:"localhost",
    database:"yaswanth_me",
    user:"root",
    password:"Yy@8309328761",
    port:3306
});

module.exports=db;