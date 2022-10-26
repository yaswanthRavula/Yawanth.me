const mysql=require("mysql2");
const db=require("./database");

module.exports= class Message{
    static postMessage(name, number, mail, description){
            db.execute(
                "INSERT INTO messages (name, number, mail, description) VALUES (?, ?, ?, ?)",[name, number, mail, description]
                );
            return true;
        

    }

    static getMessages(){
        return db.execute(
            "SELECT * from messages"
        );
    }
}