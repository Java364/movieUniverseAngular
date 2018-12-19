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
        this.showAllMovieMarks();
    }

    getMovieMark = (id: number) => {
        this.movieMarkService.getById(id, (success) => {
            this.movieMark = <MovieMark>success;
        });
    }

    showAllMovieMarks = () => {
        this.movieMarkService.getAll((success) => {
            this.movieMarks = <MovieMark[]>success;
        });
    }

    createMovieMark = () => {
        this.movieMarkService.create(this.movieMark, (success) => {
            this.movieMark = <MovieMark>success;
            this.showAllMovieMarks();
        });
    }

    updateMovieMark = (id: number) => {
        this.movieMarkService.update(id, this.movieMark, (success) => {
            this.movieMark = <MovieMark>success;
            this.showAllMovieMarks();
        });
    }

    deleteMovieMark = (id: number) => {
        if (!confirm('This movieMark will be removed')) {
            return;
        }
        this.movieMarkService.delete(id, (success) => {
            this.showAllMovieMarks();
        });
    }

    saveMovieMark = () => {
        if (this.movieMark.id > -1) {
            this.updateMovieMark(this.movieMark.id);
        } else {
            this.createMovieMark();
        }
    }

    createNew = () => {
        this.movieMark = new MovieMark();
    }
}
