import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/shared/review';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

  fullName;
  review;
  suggestionsCount=0;

  suggestionsArray:Review[]=[]
  constructor(private reviewService:ReviewService) { }

  async ngOnInit() {
    await this.getReviews();
    this.suggestionsCount=this.suggestionsArray.length;
  }

  async comment(){
      if(this.fullName!=undefined && this.fullName.length >=4 && this.review !=undefined && this.review.length>=3){
          const reviewObj:Review={name:this.fullName, description:this.review};
          await this.reviewService.postReview(reviewObj).toPromise().then(async(res)=>{
              console.log(res);
              alert("Hey! your suggestion weighs a lot to us. Will let it reach my boss Yaswanth right now.");
              
          });
    
      }

    
  }
  async getReviews(){
    this.suggestionsArray=[];
    await this.reviewService.getAllReviews().toPromise().then(async(res)=>{
       this.suggestionsArray=await res;
       console.log(res);
    })
   } 

} 
