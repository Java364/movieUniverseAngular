import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country/country.service';

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
import { GenreComponent } from './genre/genre.component';
import {GenreService} from './genre/genre.service';

@NgModule({
    declarations: [
        LinksComponent,
        PosterComponent,
        CountryComponent,
        MovieMarkComponent,
        ProfessionComponent,
        StarComponent,
        CountrySelectorComponent,
        GenreComponent,
        UserComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        LinksComponent,
        PosterComponent,
        CountryComponent,
        MovieMarkComponent,
        ProfessionComponent,
        StarComponent,
        GenreComponent,
        CountrySelectorComponent,
        UserComponent
    ],
  providers: [
    LinksService,
    PosterService,
    CountryService,
    MovieMarkService,
    ProfessionService,
    StarService,
    GenreService,
    UserService
  ],
})
export class CustomComponentModule { }
