import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryViewComponent } from 'src/app/custom-component/country/country-view/country-view.component';

@Component({
    selector: 'app-fortest-page',
    templateUrl: 'fortest.component.html'
})

export class ForTestPageComponent implements OnInit {
    constructor() { }

    @ViewChild('countriesView')
    private countriesView: CountryViewComponent;

    ngOnInit() { 
        this.countriesView.setCountriesToView([2,4]);
     }
}
