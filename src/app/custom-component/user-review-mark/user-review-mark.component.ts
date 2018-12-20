import { Component, OnInit, Input } from '@angular/core';
import { UserReviewMark } from './userReviewMark';
import { UserReviewMarkService } from './userReviewMark.service';

@Component({
  selector: 'app-user-review-mark',
  templateUrl: './user-review-mark.component.html',
  styleUrls: ['./user-review-mark.component.css']
})
export class UserReviewMarkComponent implements OnInit {
  public userReviewMark: UserReviewMark;
  public userReviewMarkList: UserReviewMark[] = [];

  constructor(private userReviewMarkService: UserReviewMarkService) {
    this.userReviewMark = new UserReviewMark();
  }

  ngOnInit() {
  }
  testGet = (id: number) => {
    this.userReviewMarkService.getUserReviewMark(id, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    }
    );
  }
  testPost() {
    this.userReviewMarkService.createUserReviewMark(this.userReviewMark, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    });
  }
  testPut = (id: number) => {
    if (!confirm('This Mark(id =' + id + ') will be updated')) {
      return;
    }
    this.userReviewMarkService.updateUserReviewMark(id, this.userReviewMark, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    });
  }
 
  testDelete = (id: number) => {
    if (!confirm('This Mark(id =' + id + ') will be removed')) {
      return;
    }
    this.userReviewMarkService.deleteUserReviewMark(id, (success) => {
      this.userReviewMark = <UserReviewMark>success;
    });
  }
  testAll() {
    this.userReviewMarkService.getAll( (success) => {
      this.userReviewMarkList = <UserReviewMark[]>success;
    });
  }
}
