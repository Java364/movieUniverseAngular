import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomComponentModule} from './custom-component/customComponents.module';
import { AppComponent } from './app.component';
import { LinksComponent } from './custom-component/links/links.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    FormsModule,
    BrowserModule,
    CustomComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
