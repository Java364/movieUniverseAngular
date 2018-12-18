import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {LinksComponent} from './links/links.component';
import {LinksService} from './links/links.service';

@NgModule({
    declarations: [LinksComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [LinksComponent],
    providers: [
        LinksService
    ],
})
export class CustomComponentModule {}
