import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent } from './custom-component/star/star.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StarService} from './custom-component/star/star.service';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [StarComponent],
  providers: [StarService],
  bootstrap: [AppComponent]
})
export class AppModule { }


