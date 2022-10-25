const mysql=require("mysql2");
const db=require("./database");
const connection=require("./database");

module.exports= class Message{
    static postMessage(name, number, mail, description){
       connection.connect();
            connection.query("INSERT INTO messages (name, number, mail, description) VALUES (?, ?, ?, ?)",[name, number, mail, description]);
            connection.end();
            return true;
        

    }

    static getMessages(){
        return db.execute(
            "SELECT * from messages"
        );
    }
}