const mysql=require('mysql2');
const pool=mysql.createPool({
    host:"sql.freedb.tech",
    database:"freedb_Yaswanth_me",
    user:"freedb_Yaswanth",
    password:"BT5x#5ssa%bQn#e",
    port:"3306"
});
module.exports=pool.promise();