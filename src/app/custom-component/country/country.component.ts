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
    public countries: Country[] = [];
    constructor(private countryService: CountryService) {
        this.country = new Country();
    }

    ngOnInit(): void {
        this.showAllCountries();
    }

    getCountry = (id: number) => {
        this.countryService.getById(id, (success) => {
            this.country = <Country>success;
        });
    }

    showAllCountries = () => {
        this.countryService.getAll((success) => {
            this.countries = <Country[]>success;
        });
    }

    createCountry = () => {
        this.countryService.create(this.country, (success) => {
            this.country = <Country>success;
            this.showAllCountries();
        });
    }

    updateCountry = (id: number) => {
        this.countryService.update(id, this.country, (success) => {
            this.country = <Country>success;
            this.showAllCountries();
        });
    }

    deleteCountry = (id: number) => {
        if (!confirm('This country will be removed')) {
            return;
        }
        this.countryService.delete(id, (success) => {
            this.showAllCountries();
        });
    }

    saveCountry = () => {
        if (this.country.id > -1) {
            this.updateCountry(this.country.id);
        } else {
            this.createCountry();
        }
    }

    createNew = () => {
        this.country = new Country();
    }
}
