const mysql=require('mysql2');
const db=require('./database');
module.exports=class Review{
    static postReview(name , review){
        return db.execute(
            "INSERT into reviews (name, description) values (?,?)",[name, review]
        );
    }

    static getAllReviews(){
        return db.execute(
            "SELECT * FROM reviews"
        );
    }
}