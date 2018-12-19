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

import { MovieMarkComponent } from './movieMark/movieMark.component';
import { MovieMarkService } from './movieMark/movieMark.service';

import {ProfessionService} from './profession/profession.service';
import {ProfessionComponent} from './profession/profession.component';

import { StarService} from './star/star.service';
import { StarComponent} from './star/star.component';


@NgModule({
    declarations: [LinksComponent, PosterComponent, CountryComponent, MovieMarkComponent, ProfessionComponent, StarComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [LinksComponent, PosterComponent, CountryComponent, MovieMarkComponent, ProfessionComponent, StarComponent],
    providers: [
        LinksService,
        PosterService,
        CountryService,
        MovieMarkService,
        ProfessionService,
        StarService
    ],
})
export class CustomComponentModule { }
