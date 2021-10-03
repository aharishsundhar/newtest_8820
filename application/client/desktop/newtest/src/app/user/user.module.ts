import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { UserComponent } from './user.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';

@NgModule({
  imports: [
AgGridModule.withComponents([]),
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule,
I18NextModule.forRoot()
],
  declarations: [
ProfilesettingsComponent,
ButtonRendererComponent,
UserComponent
],
  
  entryComponents: [
ButtonRendererComponent
],
})
export class UserModule { }