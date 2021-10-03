import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { I18NextModule } from 'angular-i18next';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    I18NextModule.forRoot()
  ],
  declarations: [
    AdminComponent
  ]

})
export class AdminModule { }