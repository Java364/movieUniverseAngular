import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponentModule } from './custom-component/customComponents.module';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './custom-component/country/country.component';

import { LinksComponent } from './custom-component/links/links.component';

import { PosterComponent } from './custom-component/poster/poster.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    FormsModule,
    CustomComponentModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
