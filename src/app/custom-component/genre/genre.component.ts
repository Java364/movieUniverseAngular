import { Component, OnInit } from '@angular/core';
import {Genre} from './genre';
import {GenreService} from './genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  public genre: Genre;
  public genres: Genre[] = [];
  constructor(private genreService: GenreService) {
    this.genre = new Genre();
  }

  ngOnInit(): void {
    this.showAllGenres();
  }


  getGenre = (genre: Genre) => {
    this.genre = genre;
  }

  showAllGenres = () => {
    this.genreService.getAll((success) => {
      this.genres = <Genre[]>(success._embedded.genres);
      console.log(this.genres);
    });
  }

  createGenre = () => {
    this.genreService.create(this.genre, (success) => {
      this.genre = <Genre>success;
      this.showAllGenres();
    });
  }

  updateGenre = (id: number) => {
    this.genreService.update(id, this.genre, (success) => {
      this.genre = <Genre>success;
      this.showAllGenres();
    });
  }

  deleteGenre = (id: number) => {
    if (!confirm('This genre will be removed')) {
      return;
    }
    this.genreService.delete(id, (success) => {
      this.showAllGenres();
    });
  }

  saveGenre = () => {
    if (this.genre.genreId > -1) {
      this.updateGenre(this.genre.genreId);
    } else {
      this.createGenre();
    }
  }

  createNew = () => {
    this.genre = new Genre();
  }

}
