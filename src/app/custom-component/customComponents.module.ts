import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country/country.service';

import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/movie.service';


import { LinksComponent } from './links/links.component';
import { LinksService } from './links/links.service';

import { UserComponent } from './users/user.component';
import { UserService } from './users/user.service';

import { PosterComponent } from './poster/poster.component';
import { PosterService } from './poster/poster.service';

import { MovieMarkComponent } from './movieMark/movieMark.component';
import { MovieMarkService } from './movieMark/movieMark.service';

import { ProfessionService } from './profession/profession.service';
import { ProfessionComponent } from './profession/profession.component';
import { CountrySelectorComponent } from './country/country-selector/country-selector.component';
import { StarComponent } from './star/star.component';
import { StarService } from './star/star.service';

@NgModule({
    declarations: [
        MovieComponent,
        LinksComponent,
        PosterComponent,
        CountryComponent,
        MovieMarkComponent,
        ProfessionComponent,
        StarComponent,
        CountrySelectorComponent,
        UserComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        MovieComponent,
        LinksComponent,
        PosterComponent,
        CountryComponent,
        MovieMarkComponent,
        ProfessionComponent,
        StarComponent,
        CountrySelectorComponent,
        UserComponent
    ],
    providers: [
        MovieService,
        LinksService,
        PosterService,
        CountryService,
        MovieMarkService,
        ProfessionService,
        StarService,
        UserService
    ],
})
export class CustomComponentModule { }
