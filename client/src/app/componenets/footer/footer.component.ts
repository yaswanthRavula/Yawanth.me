import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  
  onFBClicked(){
    window.location.href="https://www.facebook.com/YashChirala.45";
 
   }
   onInstaClicked(){
     window.location.href="https://www.instagram.com/yashwanthravula_/";
   }
   onTwitterClicked(){
     window.location.href="https://twitter.com/narasimaha45?t=-wm5qmYjKIopz7_7UzsPdQ&s=08";
   }
   onGitClicked(){
     window.location.href="https://github.com/yaswanthRavula";
   }
   onLinkedInClicked(){
     window.location.href="https://www.linkedin.com/in/yaswanth-ravula-698b00157";
   }
 
   whoAmI(){
     this.router.navigate(['about'])
   }
 


}
