import { Component, OnInit, ViewChild } from '@angular/core';
import { CountrySelectorComponent } from 'src/app/custom-component/country/country-selector/country-selector.component';

@Component({
    selector: 'app-movie-page',
    templateUrl: 'movie.component.html'
})

export class MoviePageComponent implements OnInit {

    @ViewChild('countrySelector')
    private countrySelector: CountrySelectorComponent;

    constructor() {

    }

    ngOnInit() { }

    public saveMovie() {
        const countries: number[] = this.countrySelector.getSelectedCountries();
        console.log(countries);
    }
}
