import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {LinksComponent} from './links/links.component';
import {LinksService} from './links/links.service';

import {PosterComponent} from './poster/poster.component';
import {PosterService} from './poster/poster.service';

@NgModule({
    declarations: [LinksComponent, PosterComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [LinksComponent, PosterComponent],
    providers: [
        LinksService,
      PosterService
    ],
})
export class CustomComponentModule {}
