import { Component, OnInit } from '@angular/core';
import { Poster } from './poster';
import { PosterService } from './poster.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  public poster: Poster;

  constructor(private posterService: PosterService) {
    this.poster = new Poster();
  }


  ngOnInit():void {
  }
  testGet() {
    this.posterService.getPoster(7, (success) => {
      this.poster = <Poster>success;
    }
    )
  }
  testPost() {
    this.posterService.createPoster(this.poster, (success) => {
      this.poster = <Poster>success;
    })
  }
  testPut() {
    this.posterService.updatePoster(7, this.poster, (success) => {
      this.poster = <Poster>success;
    })
  }
  testDelete() {
    this.posterService.deletePoster(9, (success) => {
      this.poster = <Poster>success;
    })
  }
}
