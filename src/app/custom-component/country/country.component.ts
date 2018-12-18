import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    public country: Country;
    constructor(private countryService: CountryService) {
        this.country = new Country();
    }

    ngOnInit(): void {
    }

    getCountryById() {
        this.countryService.getById(3, (success) => {
            this.country = <Country>success;
        });
    }

    showAllCountries() {
        this.countryService.getAll((success) => {
            this.country = <Country>success;
        });
    }

    createCountry() {
        this.countryService.create(this.country, (success) => {
            this.country = <Country>success;
        });
    }

    updateCountry() {
        this.countryService.update(3, this.country, (success) => {
            this.country = <Country>success;
        });
    }
    deleteCountry() {
        this.countryService.delete(3, (success) => {
            this.country = <Country>success;
        });
    }

}
