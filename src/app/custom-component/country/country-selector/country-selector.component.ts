import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
    selector: 'app-country-selector',
    templateUrl: 'country-selector.component.html'
})

export class CountrySelectorComponent implements OnInit {
    public countries: Country[] = [];
    public selectedCountries: number[] = [];

    public getSelectedCountries() {
        return this.selectedCountries;
    }

    public setSelectedCountries(countries: number[]) {
        this.selectedCountries = countries;
    }

    constructor(private countryService: CountryService) {
    }

    public getSelectedCountriesDto() {
        return this.countries.filter(country => this.selectedCountries.indexOf(country.id) > 0);
    }

    ngOnInit() {
        this.countryService.getAll((success) => {
            console.log(success);
            this.countries = <Country[]>success;
        });
    }
}
