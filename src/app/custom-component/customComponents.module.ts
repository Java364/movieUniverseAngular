import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country/country.service';

@NgModule({
    declarations: [CountryComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [CountryComponent],
    providers: [
        CountryService
    ],
})
export class CustomComponentModule {}
