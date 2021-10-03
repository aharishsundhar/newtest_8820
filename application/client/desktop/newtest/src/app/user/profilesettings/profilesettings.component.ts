import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.scss']
})
export class ProfilesettingsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private profileservice: UserService, private route: Router) { }

  public id: any;
  public Userobject = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'password': '',
    'role': {},
    'id': '',
    'username': '',
    'installrToken': ''
  };
  public userDefault = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'password': '',
    'role': {},
    'id': '',
    'username': '',
    'installrToken': ''
  };
  public roles: any[] = [];
  public rolechange: any;
  public defaultUserRole: any;
  public defaultRole: {}

  ngOnInit() {
    this.Queryparams();
  }

  Queryparams() {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.Userdetails();
  }

  Userdetails() {
    this.profileservice.Getuser(this.id).subscribe(data => {
      this.defaultRole = data.body.body.role;
      // console.log("userdefaulttt------>>>",this.defaultRole)
      const user = data.body.body;
      this.Userobject.firstname = user.firstname;
      this.Userobject.lastname = user.lastname;
      this.Userobject.email = user.email;
      this.Userobject.username = user.username;
      this.Userobject.role = user.role.role;
      this.Userobject.installrToken = user.installrToken;
      this.Userobject.password = user.password;

      this.profileservice.Getroles().subscribe(roledata => {
        this.roles = roledata.body.body;
        this.defaultUserRole = this.Userobject.role;
        // console.log('-------roles---11111-->>>>', this.Userobject.role);
        const index = this.roles.findIndex(x => x.role === this.Userobject.role);
        // console.log('-------indexvalue-----', index);
        if (index > -1) {
          this.roles.splice(index, 1);
        }
        // console.log('-------roles--array--->>>>', this.roles);
      }, error => {
        console.error('error:', error);
      });
    }, error => {
      console.error('error:', error);
    });
  }

  onChange(event) {
    this.rolechange = '';
    // console.log('selected  event---->>>', event);

    const updaterole = this.roles.find(x => x.role === event);

    // console.log('------roledetails---->>>>', updaterole);

    this.rolechange = updaterole;
  }

  cancle() {
    this.route.navigate(['usermanagement'])
  }

  Updateuser() {
    this.Userobject.role = this.rolechange;
    this.Userobject.id = this.id;
    this.Userobject.username = this.Userobject.email;
    const userRole = sessionStorage.getItem('Access');

    if (this.Userobject.role === null || this.Userobject.role === undefined) {
      // console.log('ifcondtion---->>>>>', this.defaultRole);

      this.userDefault.firstname = this.Userobject.firstname;
      this.userDefault.lastname = this.Userobject.lastname;
      this.userDefault.email = this.Userobject.email;
      this.userDefault.role = this.defaultRole;
      this.userDefault.id = this.Userobject.id;
      this.userDefault.username = this.Userobject.username;
      this.userDefault.installrToken = this.Userobject.installrToken;

      this.profileservice.Updateuser(this.userDefault).subscribe(data => {
        this.route.navigate(['admin']);
      }, error => {
        console.error('error:', error);
      });
    } else {

      this.profileservice.Updateuser(this.Userobject).subscribe(data => {
        this.route.navigate(['admin']);
      }, error => {
        console.error('error:', error);
      });
    }
  }
}
