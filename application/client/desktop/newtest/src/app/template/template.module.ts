import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        I18NextModule.forRoot(),
        RouterModule,
    ],
    declarations: [
        TemplateComponent,
    ], 
    exports: [
        TemplateComponent,
    ]
})
export class TemplateModule { }