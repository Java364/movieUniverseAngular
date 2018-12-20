import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserReviewMark } from './userReviewMark';
@Injectable()
export class UserReviewMarkService {
    constructor(private httpClient: HttpClient) {
    }
    public getUserReviewMark(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/userReviewMark/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public createUserReviewMark( userReviewMark:UserReviewMark, callback: Function) {
        this.httpClient.post('http://localhost:8080/userReviewMark', userReviewMark).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public updateUserReviewMark(id: number, userReviewMark:UserReviewMark, callback: Function, ) {
        this.httpClient.put('http://localhost:8080/userReviewMark/' + id, userReviewMark).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public deleteUserReviewMark(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/userReviewMark/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/userReviewMarks').subscribe(
          (success) => {
            callback(success);
          }
        );
      }
}
