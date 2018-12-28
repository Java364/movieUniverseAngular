import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';


@Component({
    selector: 'app-genre-selector',
    templateUrl: 'genre-selector.component.html'
})

export class GenreSelectorComponent implements OnInit {
    public genres: Genre[] = [];
    public selectedGenres: number[] = [];

    public getSelectedGenres() {
        return this.selectedGenres;
    }

    public setSelectedGenres(countries: number[]) {
        this.selectedGenres = countries;
    }

    constructor(private genreService: GenreService) {
    }

    ngOnInit() {
        this.genreService.getAll((success) => {
            console.log(success);
            this.genres = <Genre[]>(success);
        });
    }
}
