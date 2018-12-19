import { Component, OnInit } from '@angular/core';
import {Star} from './star';
import {StarService} from './star.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  public star: Star;
  constructor(private starService: StarService) {
    this.star = new Star();
  }

  ngOnInit(): void {
  }
  testGet() {
    this.starService.getStar(1, (success) => {
      this.star = <Star>success;
    });
  }
  testPost() {
    this.starService.createStar(this.star, (success) => {
      this.star = <Star>success;
    });
  }
  testPut() {
    this.starService.updateStar(1, this.star, (success) => {
      this.star = <Star>success;
    });
  }
  testDelete() {
    this.starService.deleteStar(6, (success) => {
      this.star = <Star>success;
    });
  }
}
