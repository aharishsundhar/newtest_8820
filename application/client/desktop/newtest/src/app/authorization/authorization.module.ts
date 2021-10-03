import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { AuthorizationComponent } from './authorization.component';

@NgModule({
  imports: [
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule,
I18NextModule.forRoot()
],
  declarations: [
AuthorizationComponent
]
  
  
})
export class AuthorizationModule { }