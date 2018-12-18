import { Component, OnInit } from '@angular/core';
import { MovieMark } from './movieMark';
import { MovieMarkService } from './movieMark.service';

@Component({
    selector: 'app-moviemark',
    templateUrl: './movieMark.component.html',
    styleUrls: ['./movieMark.scss']
})
export class MovieMarkComponent implements OnInit {
    public movieMark: MovieMark;
    constructor(private movieMarkService: MovieMarkService) {
        this.movieMark = new MovieMark();
    }

    ngOnInit(): void {
    }

    getMovieMarkById() {
        this.movieMarkService.getById(3, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }

    showAllMovieMarks() {
        this.movieMarkService.getAll((success) => {
            this.movieMark = <MovieMark>success;
        });
    }

    createMovieMark() {
        this.movieMarkService.create(this.movieMark, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }

    updateCountry() {
        this.movieMarkService.update(3, this.movieMark, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }
    deleteMovieMark() {
        this.movieMarkService.delete(3, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }
}
