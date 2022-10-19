const mysql=require('mysql2');
const db=require('./database');
const connection=require('./database');

module.exports=class Review{
    static postReview(name , review){
        connection.connect();
        var result=null;
            connection.query("INSERT into reviews (name, description) values (?,?)",[name, review],function(error,results){
                result=results;
            })
            connection.end();
            return result;
    }

    static  getAllReviews(){
        var result=null;
            connection.connect();
            connection.query("SELECT * FROM reviews",function (err,res){
            result=res;
           });
           
             console.log(result,"---");

    
    }
}