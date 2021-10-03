import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        I18NextModule.forRoot(),
        RouterModule,
    ],
    declarations: [
        FooterComponent,
    ], 
    exports: [
        FooterComponent,
    ]
})
export class FooterModule { }