import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie/movie.component';
import { StarPageComponent } from './star/star.component';
import { ProfessionPageComponent } from './profession/profession.component';
import { CountryPageComponent } from './country/country.component';
import { PageComponent } from './page.component';
import { CustomComponentModule } from '../custom-component/customComponents.module';
import {LinksPageComponent} from './links/links.component';

const appRoutes: Routes = [
    { path: 'movie', component: MoviePageComponent },
    { path: 'star', component: StarPageComponent },
    { path: 'profession', component: ProfessionPageComponent },
    { path: 'country', component: CountryPageComponent },
  { path: 'links', component: LinksPageComponent }
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
      LinksPageComponent
    ],
    providers: [],
})
export class PageModule {

}