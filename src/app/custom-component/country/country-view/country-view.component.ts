import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
    selector: 'app-country-view',
    templateUrl: 'country-view.component.html'
})

export class CountryViewComponent implements OnInit {
    private allCountries: Country[] = [];
    public countries: Country[] = [];

    @Input('countriesToView')
    public countriesToView: number[] = [];

    public setCountriesToView(countries: number[]) {
        this.countriesToView = countries;
        this.countries = this.allCountries.filter(country=>this.countriesToView.indexOf(country.id) >=0 );
    }

    constructor(private countryService: CountryService) {
    }
    
    ngOnInit() {
        this.countryService.getAll((success) => {
            this.allCountries = <Country[]>success;
            this.setCountriesToView(this.countriesToView);
        });
    }

    
}
