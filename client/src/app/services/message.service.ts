import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../shared/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  url="http://localhost:9000/";


  postMessage(message:Message){
    return this.http.post(this.url+"messages",message)
  }

  getMessages():Observable<Message[]>{
      return this.http.get<Message[]>(this.url+"messages");
  }
}
