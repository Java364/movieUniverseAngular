import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie} from './movie';
import { MovieService } from './movie.service';
import { CountrySelectorComponent } from '../country/country-selector/country-selector.component';
import { GenreSelectorComponent } from '../genre/genre-selector/genre-selector.component';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    public movie: Movie;
    public movies: Movie[] = [];

    @ViewChild('countrySelector')
    private countrySelector: CountrySelectorComponent;

    @ViewChild('genreSelector')
    private genreSelector: GenreSelectorComponent;

    constructor(private movieService: MovieService) {
        this.movie = new Movie();
    }

    ngOnInit(): void {
        this.showAllMovies();
    }

    getMovie = (id: number) => {
        this.movieService.getById(id, (success) => {
            this.movie = <Movie>success;
            this.countrySelector.setSelectedCountries(this.movie.countries);
            this.genreSelector.setSelectedGenres(this.movie.genres);
        });
    }

    showAllMovies = () => {
        this.movieService.getAll((success) => {
            this.movies = <Movie[]>success;
        });
    }

    createMovie = () => {
        this.movie.countries = this.countrySelector.getSelectedCountries();
        this.movie.genres = this.genreSelector.getSelectedGenres();

        this.movieService.create(this.movie, (success) => {
            this.movie = <Movie>success;
            this.showAllMovies();
        });
    }

    updateMovie = (id: number) => {
        this.movie.countries = this.countrySelector.getSelectedCountries();
        this.movie.genres = this.genreSelector.getSelectedGenres();

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
        this.countrySelector.setSelectedCountries([]);
        this.genreSelector.setSelectedGenres([]);
    }

    addCountris = () => {
        let countries = this.countrySelector.getSelectedCountriesDto();
        this.movieService.addCountries(this.movie.id, countries, (success) => {
            console.log(success)
        })
    }
}
