import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie/movie.component';
import { StarPageComponent } from './star/star.component';
import { ProfessionPageComponent } from './profession/profession.component';
import { CountryPageComponent } from './country/country.component';
import { UserPageComponent } from './user/user.component';
import { PageComponent } from './page.component';
import { CustomComponentModule } from '../custom-component/customComponents.module';

import { LinksPageComponent } from './links/links.component';
import { PosterPageComponent } from './poster/poster.component';
import { UserReviewMarkPageComponent } from './user-review-mark/user-review-mark.component';
import { MovieMarkPageComponent } from './movieMark/movieMark.component';

const appRoutes: Routes = [

  { path: 'movie', component: MoviePageComponent },
  { path: 'star', component: StarPageComponent },
  { path: 'profession', component: ProfessionPageComponent },
  { path: 'country', component: CountryPageComponent },
  { path: 'users', component: UserPageComponent },
  { path: 'links', component: LinksPageComponent },
  { path: 'poster', component: PosterPageComponent },
  { path: 'user-review-mark', component: UserReviewMarkPageComponent },
  { path: 'moviemark', component: MovieMarkPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CustomComponentModule
  ],
  exports: [
    PageComponent
  ],
  declarations: [
    PageComponent,
    MoviePageComponent,
    StarPageComponent,
    ProfessionPageComponent,
    CountryPageComponent,
    UserPageComponent,
    LinksPageComponent,
    PosterPageComponent,
    UserReviewMarkPageComponent,
    MovieMarkPageComponent
  ],
  providers: [],})
  export class PageModule {
  
  }
  

