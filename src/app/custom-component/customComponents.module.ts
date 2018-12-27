<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { StarComponent } from './star/star.component';
import { StarService } from './star/star.service';
import { GenreComponent } from './genre/genre.component';
import { GenreService } from './genre/genre.service';
import { UserReviewComponent } from './user-review/user-review.component';
import { UserReviewService } from './user-review/user-review.service';
=======
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryComponent} from './country/country.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CountryService} from './country/country.service';
import {MovieComponent} from './movie/movie.component';
import {MovieService} from './movie/movie.service';
import { UserComponent } from './users/user.component';
import { UserService } from './users/user.service';
import {LinksComponent} from './links/links.component';
import {LinksService} from './links/links.service';
import {PosterComponent} from './poster/poster.component';
import {PosterService} from './poster/poster.service';
import {MovieMarkComponent} from './movieMark/movieMark.component';
import {MovieMarkService} from './movieMark/movieMark.service';
import {ProfessionService} from './profession/profession.service';
import {ProfessionComponent} from './profession/profession.component';
import {CountrySelectorComponent} from './country/country-selector/country-selector.component';
import {StarComponent} from './star/star.component';
import {StarService} from './star/star.service';
import {GenreComponent} from './genre/genre.component';
import {GenreService} from './genre/genre.service';
import {UserReviewComponent} from './user-review/user-review.component';
import {UserReviewService} from './user-review/user-review.service';
>>>>>>> e6da3bcee9033434481a47a29f295f854ae4e029
import { GenreSelectorComponent } from './genre/genre-selector/genre-selector.component';
import { CountryModule } from './country/country.model';

@NgModule({
  declarations: [
<<<<<<< HEAD
    MovieComponent,
    LinksComponent,
    PosterComponent,
    MovieMarkComponent,
    ProfessionComponent,
    StarComponent,
    GenreComponent,
    UserComponent,
    UserReviewComponent,
    GenreSelectorComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    CountryModule
  ],
  exports: [
    MovieComponent,
    LinksComponent,
    PosterComponent,
    CountryModule,
    MovieMarkComponent,
    ProfessionComponent,
    StarComponent,
    GenreComponent,
    UserComponent,
    UserReviewComponent,
    GenreSelectorComponent
  ],
  providers: [
    MovieService,
    LinksService,
    PosterService,

    MovieMarkService,
    ProfessionService,
    StarService,
    GenreService,
    UserService,
    UserReviewService
  ],
=======
  MovieComponent,
  LinksComponent,
  PosterComponent,
  CountryComponent,
  MovieMarkComponent,
  ProfessionComponent,
  StarComponent,
  CountrySelectorComponent,
  GenreComponent,
  UserComponent,
  UserReviewComponent,
    GenreSelectorComponent
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
      GenreComponent,
      CountrySelectorComponent,
      UserComponent,
      UserReviewComponent,
      GenreSelectorComponent
    ],
    providers: [
      MovieService,
      LinksService,
      PosterService,
      CountryService,
      MovieMarkService,
      ProfessionService,
      StarService,
      GenreService,
      UserService,
      UserReviewService
    ],


>>>>>>> e6da3bcee9033434481a47a29f295f854ae4e029
})
export class CustomComponentModule {
}
