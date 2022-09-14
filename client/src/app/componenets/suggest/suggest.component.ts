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

  suggestionsArray:Review[]=[]
  constructor(private reviewService:ReviewService) { }

  async ngOnInit() {
    await this.getReviews();
  }

  comment(){
      if(this.fullName!=undefined && this.fullName.length >=4 && this.review !=undefined && this.review.length>=3){
          const reviewObj:Review={name:this.fullName, description:this.review};
          this.reviewService.postReview(reviewObj).subscribe((res)=>{
              alert("Thanks For your feedback");
              window.location.reload();
          })

    
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