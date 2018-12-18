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
    public movieMarks: MovieMark[] = [];
    constructor(private movieMarkService: MovieMarkService) {
        this.movieMark = new MovieMark();
    }

    ngOnInit(): void {
    }

    getMovieMarkById() {
        this.movieMarkService.getById(2, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }

    showAllMovieMarks() {
        this.movieMarkService.getAll((success) => {
            this.movieMarks = <MovieMark[]>success;
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
        this.movieMarkService.delete(4, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }
}
