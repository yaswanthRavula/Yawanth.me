import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../shared/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }
  url="https://yaswanth-me.vercel.app/";

  postReview(review:Review){
    return this.http.post(this.url+"reviews",review );
  }

  getAllReviews():Observable<Review[]>{
    return this.http.get<Review[]>(this.url+"reviews");
  }
}
