import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        I18NextModule.forRoot(),
        RouterModule,
    ],
    declarations: [
        HeaderComponent,
    ], 
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule { }