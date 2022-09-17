import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ticTacToe(){
     window.location.href="https://the-tic-tac-toe.vercel.app/"
  }

  cruisers(){
    window.location.href="https://www.cruiserselite.tech/"
  }

  eCom(){
    window.location.href="https://631a291908c292035b797b24--verdant-mandazi-fd688b.netlify.app/"
  }
}
