import { Component, OnInit } from '@angular/core';
import { Movie} from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    public movie: Movie;
    public movies: Movie[] = [];
    constructor(private movieService: MovieService) {
        this.movie = new Movie();
    }

    ngOnInit(): void {
        this.showAllMovies();
    }

    getMovie = (id: number) => {
        this.movieService.getById(id, (success) => {
            this.movie = <Movie>success;
        });
    }

    showAllMovies = () => {
        this.movieService.getAll((success) => {
            this.movies = <Movie[]>success;
        });
    }

    createMovie = () => {
        this.movieService.create(this.movie, (success) => {
            this.movie = <Movie>success;
            this.showAllMovies();
        });
    }

    updateMovie = (id: number) => {
        this.movieService.update(id, this.movie, (success) => {
            this.movie = <Movie>success;
            this.showAllMovies();
        });
    }

    deleteMovie = (id: number) => {
        if (!confirm('This movie will be removed')) {
            return;
        }
        this.movieService.delete(id, (success) => {
            this.showAllMovies();
        });
    }

    saveMovie = () => {
        if (this.movie.id > -1) {
            this.updateMovie(this.movie.id);
        } else {
            this.createMovie();
        }
    }

    createNew = () => {
        this.movie = new Movie();
    }
}
