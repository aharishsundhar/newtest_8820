import { Constants } from './../config/Constant';
import { Component, OnInit } from '@angular/core';
import { ManageUserService } from './manageusers.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  userslist: any;
  rolelist: any;
  user: any;
  roles: any;
  selectedoption
  role_id: any;

  constructor(private manageUserService: ManageUserService, private constants: Constants) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    this.manageUserService.GpGetAllUsers().subscribe((userslist) => {
      this.userslist = userslist;
      console.log("userslist---->", this.userslist);
    }, (error) => {
      console.log('Error--->>>>>', error);
    });
  }

  getRoles() {
    this.manageUserService.GpGetAllRoles().subscribe((rolelist) => {
      this.rolelist = rolelist;
    }, (error) => {
      console.log('Error--->>>>>', error);
    });
  }

  save(user) {
    let selected_role = user.role.role;
    this.rolelist.forEach(element => {
      if (element.role == selected_role) {
        console.log("elemnt.role", element.role)
        this.role_id = element._id
        const tempObj = {
          id: user._id,
          role: {
            role: user.role.role,
            _id: this.role_id
          },
          email: user.email,
          username: user.username
        };
        this.manageUserService.GpUpdateUsers(tempObj).subscribe((response) => {
        }, (error) => {
          console.log('error--save>>>>>', error)
        })
      }
    });
  }
}
