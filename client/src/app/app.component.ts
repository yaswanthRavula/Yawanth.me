import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './shared/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItemArray:NavItem[]=[];
  constructor(private router:Router){}
  ngOnInit():void{
    this.navItemArray=[
      {optionName:"Home", image:"../assets/home.png"},
      {optionName:"About", image:"../assets/about.png"},
      {optionName:"Work",image:"../assets/work.png"},
      {optionName:"Tech", image:"../assets/tech.png"},
      {optionName:"Suggest",image:"../assets/rating.png"},
      {optionName:"Message",image:"../assets/message.png"}
    ];
    
  }

  onOptionClicked(i:number){
    for(var x=0;x<this.navItemArray.length;x++){
      document.getElementById("nav-item-"+x).style.background="transparent";
    }
    document.getElementById("nav-item-"+i).style.background="linear-gradient(20deg, orange,red)";
    if(i==0)
       this.router.navigate(['/Home']);
    else if(i==1)
      this.router.navigate(['/About']);
    else if(i==2)
      this.router.navigate(['/Work']);
    else if(i==3)
      this.router.navigate(['/Tech-stack']); 
    else if(i==4)
      this.router.navigate(['/Suggest']);
    else
      this.router.navigate(['/Contact-me']);   
    this.closeMobNav();       
           
  }

  openMobNav(){
    document.getElementById("threeLines").style.display="none";
    document.getElementById("mob-nav-text").style.display="block";
  }
  closeMobNav(){
    document.getElementById("threeLines").style.display="flex";
    document.getElementById("mob-nav-text").style.display="none";
  }

    
}
