import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryEditorComponent } from './country-editor/country-editor.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryService } from './country.service';

@NgModule({
    declarations: [
        CountryEditorComponent,
        CountrySelectorComponent,
        CountryViewComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        CountryEditorComponent,
        CountrySelectorComponent,
        CountryViewComponent
    ],
    providers: [
        CountryService
    ],
})
export class CountryModule {
}