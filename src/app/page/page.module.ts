import {NgModule} from '@angular/core';
import {GenrePageComponent} from './genre/genre-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MoviePageComponent} from './movie/movie.component';
import {StarPageComponent} from './star/star.component';
import {ProfessionPageComponent} from './profession/profession.component';
import {CountryPageComponent} from './country/country.component';
import {UserPageComponent} from './user/user.component';
import {PageComponent} from './page.component';
import {CustomComponentModule} from '../custom-component/customComponents.module';
import {UserReviewMarkPageComponent} from './user-review-mark/user-review-mark.component'
import {LinksPageComponent} from './links/links.component';
import {PosterPageComponent} from './poster/poster.component';
import {MovieMarkPageComponent} from './movieMark/movieMark.component';
import { UserReviewPageComponent } from './user-review-page/user-review-page.component';


const appRoutes: Routes = [


  {path: 'movie', component: MoviePageComponent},
  {path: 'star', component: StarPageComponent},
  {path: 'profession', component: ProfessionPageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'users', component: UserPageComponent},
  {path: 'links', component: LinksPageComponent},
  {path: 'poster', component: PosterPageComponent},
  {path: 'moviemark', component: MovieMarkPageComponent},
  {path: 'genre', component: GenrePageComponent},
  {path: 'user-review', component: UserReviewPageComponent},
  {path: 'user-review-mark', component: UserReviewMarkPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
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
    GenrePageComponent,
    MovieMarkPageComponent,
    UserReviewPageComponent,
    UserReviewMarkPageComponent
  ],

  providers: [],
})
export class PageModule {

}

