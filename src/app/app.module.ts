import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PosterComponent } from './custom-components/poster/poster.component';
import { FormsModule } from '@angular/forms';
import { CustomComponentModule } from './custom-components/customComponents.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CustomComponentModule,
    FormsModule,
    BrowserModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
