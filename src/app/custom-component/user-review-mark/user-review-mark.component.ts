import { Component, OnInit } from '@angular/core';
import { UserReviewMark } from './userReviewMark';
import { UserReviewMarkService } from './userReviewMark.service';

@Component({
  selector: 'app-user-review-mark',
  templateUrl: './user-review-mark.component.html',
  styleUrls: ['./user-review-mark.component.css']
})
export class UserReviewMarkComponent implements OnInit {
  public userReviewMark: UserReviewMark;

  constructor(private userReviewMarkService:UserReviewMarkService) {
    this.userReviewMark = new UserReviewMark();
   }

  ngOnInit() {
  }
  testGet() {
    this.userReviewMarkService.getUserReviewMark(3, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    }
    )
  }
  testPost() {
    this.userReviewMarkService.createUserReviewMark(this.userReviewMark, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    })
  }
  testPut() {
    this.userReviewMarkService.updateUserReviewMark(3, this.userReviewMark, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    })
  }
  testDelete() {
    this.userReviewMarkService.deleteUserReviewMark(1, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    })
  }
}
