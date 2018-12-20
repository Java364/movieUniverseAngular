import {Component, OnInit} from '@angular/core';
import {Genre} from '../genre/genre';
import {UserReviewService} from './user-review.service';
import {UserReview} from './user-review';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  public userReview: UserReview;
  public userReviews: UserReview[] = [];
  constructor(private userReviewService: UserReviewService) {
    this.userReview = new UserReview();
  }

  ngOnInit(): void {
    this.showAllUserReviews();
  }


  getUserReview = (userReview: UserReview) => {
    this.userReview = userReview;
  }

  showAllUserReviews = () => {
    this.userReviewService.getAll((success) => {
      this.userReviews = <UserReview[]>(success._embedded.userReviews);
    });
  }

  createUserReview = () => {
    this.userReviewService.create(this.userReview, (success) => {
      this.userReview = <UserReview>success;
      this.showAllUserReviews();
    });
  }

  updateUserReview = (id: number) => {
    this.userReviewService.update(id, this.userReview, (success) => {
      this.userReview = <UserReview>success;
      this.showAllUserReviews();
    });
  }

  deleteUserReview = (id: number) => {
    if (!confirm('This userReview will be removed')) {
      return;
    }
    this.userReviewService.delete(id, (success) => {
      this.showAllUserReviews();
    });
  }

  saveUserReview = () => {
    if (this.userReview.userReviewId > -1) {
      this.updateUserReview(this.userReview.userReviewId);
    } else {
      this.createUserReview();
    }
  }

  createNew = () => {
    this.userReview = new UserReview();
  }

}
