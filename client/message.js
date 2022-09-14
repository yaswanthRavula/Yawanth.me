const mysql=require("mysql2");
const db=require("./database");

module.exports= class Message{
    static postMessage(name, number, mail, description){
        return db.execute(
            "INSERT INTO messages (name, number, mail, description) VALUES (?, ?, ?, ?)",[name, number, mail, description]
        );

    }

    static getMessages(){
        return db.execute(
            "SELECT * from messages"
        );
    }
}