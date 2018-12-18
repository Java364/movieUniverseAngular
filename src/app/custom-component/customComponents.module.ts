import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country/country.service';

import { LinksComponent } from './links/links.component';
import { LinksService } from './links/links.service';

import { PosterComponent } from './poster/poster.component';
import { PosterService } from './poster/poster.service';

@NgModule({
    declarations: [LinksComponent, PosterComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [LinksComponent, PosterComponent, CountryComponent],
    providers: [
        LinksService,
        PosterService,
        CountryService
    ],
})
export class CustomComponentModule { }
