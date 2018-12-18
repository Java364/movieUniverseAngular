import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from './poster/poster.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PosterService } from './poster/poster.service';

@NgModule({
    declarations: [PosterComponent],
    imports: [ 
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [PosterComponent],
    providers: [
        PosterService
    ],
})
export class CustomComponentModule {}