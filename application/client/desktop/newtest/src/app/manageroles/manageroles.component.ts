import { Component, OnInit } from '@angular/core';
import { ManageRolesService } from './manageroles.service';
import { Constants } from '../config/Constant';

@Component({
  selector: 'app-manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.scss']
})
export class ManagerolesComponent implements OnInit {

  name = '';
  role = '';
  queryId: any;
  default_role = ["Admin", "User", "Guest"];
  custom_role = [];
  enablebutton: boolean = true;
  rolelist: any;

  constructor(private manageRolesService: ManageRolesService, private constants: Constants) { }

  ngOnInit() {
    this.getRoles();
  }

  save() {
    this.custom_role.push(this.name);
    this.enablebutton = true;
    let rolename = { "role": this.name }
    this.manageRolesService.GpSaveRoles(rolename).subscribe((data) => {
      this.getRoles();
    }, (error) => {
      console.log('Error in data save ---->>', error);
    });
    this.name = '';
  }

  remove(role) {
    this.manageRolesService.GpDeleteRoles(role._id).subscribe((data) => {
      this.getRoles();
    }, (error) => {
      console.log('Error in data save ---->>', error);
    });
  }

  getInputValue(e) {
    var event = e;
    if (event.length > 0) {
      this.enablebutton = false;
    }
    else {
      this.enablebutton = true;
    }
  }

  getRoles() {
    this.manageRolesService.GpGetAllRoles().subscribe((rolelist) => {
      this.rolelist = rolelist;
    }, (error) => {
      console.log('Error--->>>>>', error);
    });
  }
}