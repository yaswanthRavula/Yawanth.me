import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
fullName;
mailId;
number;
description;
message:Message;
  constructor(private messageService:MessageService, private route :Router) { }
  ngOnInit(): void {
  }

  async sendMessage(){
    console.log(this.isFormFilled())
    if(this.isFormFilled()){
      console.log("Entering")
       this.message={name:this.fullName, number:this.number,description:this.description,mail:this.mailId}
       await this.messageService.postMessage(this.message).toPromise().then((res)=>{
        if(res==true){
          alert("Your message is Posted")
          window.location.reload();
        }
       });
    }
  }

  isFormFilled(){
    if(this.fullName==undefined || this.fullName.length<=3){
      alert("Enter valid Name")
      return false;
    }
    if(this.number==undefined || this.number.toString().length!=10){
              alert("Enter valid number");
              return false;
    }   
    if(this.mailId==undefined || this.mailId.length<=4)
         return false;
    if(this.description==undefined || this.description.length<=4)
         return false;
    return true;               
  }


  showMessages(){
     this.route.navigate(['/show-messages']);
  }
}
