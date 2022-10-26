const mysql=require('mysql2');
const db=require('./database');
const connection=require('./database');

module.exports=class Review{
    static postReview(name , review){
       
           db.execute("INSERT into reviews (name, description) values (?,?)",[name, review]);
           return true;
           
    }

    static  getAllReviews(){
            return db.execute("SELECT * FROM reviews");

    
    }
}