import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomComponentModule } from './custom-component/customComponents.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }




