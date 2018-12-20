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


  ngOnInit(): void {
  }
  showPoster = (id:number)=> {
    this.posterService.getPoster(id, (success) => {
      this.poster = <Poster>success;
    }
    );
  }
  createPoster() {
    this.posterService.savePoster(this.poster, (success) => {
      this.poster = <Poster>success;
    });
  }
  
  deletePosterById = (id: number) => {
    if (!confirm('This poster(id =' + id + ') will be removed')) {
      return;
    }
    this.posterService.deletePoster(id, (success) => {
    
    });
  }
    updatePosterById = (id: number) => {
    if (!confirm('This poster(id =' + id + ') will be updated')) {
      return;
    }
    this.posterService.putPoster(id,this.poster, (success) => {
      this.poster = <Poster>success;
    });
  }
}
