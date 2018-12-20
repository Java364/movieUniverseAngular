import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserReview } from './user-review';

@Injectable()
export class UserReviewService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(callback: Function) {
    this.httpClient.get('http://localhost:8080/user-review/all').subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public create(userReview: UserReview, callback: Function) {
    this.httpClient.post('http://localhost:8080/user-review', userReview).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public update(id: number, userReview: UserReview, callback: Function) {
    this.httpClient.put('http://localhost:8080/user-review/' + id, userReview).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public delete(id: number, callback: Function) {
    this.httpClient.delete('http://localhost:8080/user-review/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}
