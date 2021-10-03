import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BroadcastService } from './../auth/broadcast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public challenge: any;
  public loginChallenge: any;
  public login: any;
  public loginform: FormGroup;
  public user = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  public token: any;
  public href: any;
  public lastLoggedInTime: any;
  public errorMessage: any;
  public id: any;
  public userDetails: any;
  public tokenError: any;
  public accessLevel: any;
  public socialLogin: Boolean = false;
  public permission: any[] = [];
  public signup: boolean;
  public newUser: any = [];
  public isChecked: boolean;
  public displayModel: String = 'none';
  public show: boolean;
  public openId: String = 'openid';
  public submit = false;


  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private broadcast: BroadcastService,
    private loginservice: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.show = false;
  }



  ngOnInit() {
    this.loginform = new FormGroup({
      logindata: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        // tslint:disable-next-line:max-line-length
        password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])[A-Za-z\d].{8,}')])
      })
    });
  }



  closeDeleteFModel() {
    this.displayModel = 'none';
    this.isChecked = false;
  }

  newuser(value) {
    if (value.checked) {
      this.signup = true;
      this.displayModel = 'block';
      this.isChecked = true;

    }
  }


  Queryparams() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.loginChallenge = params['login_challenge'];
      this.challenge = window.location.href;
      this.login = {
        'login_challenge': this.challenge
      };
      const splitvalue = this.challenge.split('?');
      this.login = splitvalue[1];
    });
  }
  hideEye() {
    this.show = !this.show;
  }


  Login() {
    this.submit = true;
    if (this.loginform.invalid) {
      return;
    }
    this.permission = [];
    const logininfo = {
      email: this.loginform.value.logindata.email,
      password: this.loginform.value.logindata.password
    };
    this.loginservice.Login(logininfo).subscribe(logindetails => {
      if (logindetails.Access !== undefined) {
        this.accessLevel = logindetails.Access[0];
        this.permission.push(this.accessLevel);
        this.broadcast.sendMessage({ 'Access': this.permission });
        this.broadcast.guardArray = [];
        this.broadcast.guardArray = this.permission;

        sessionStorage.setItem('Access', JSON.stringify (this.permission));
      }
      this.userDetails = logindetails.Userdetails;
      this.tokenError = logindetails.error;
      this.id = this.userDetails._id;
      this.lastLoggedInTime = this.userDetails.loggedinDate;
      if (this.userDetails === 'Incorrect Username or Password') {
        this.errorMessage = this.userDetails;
      } else {
        if (this.tokenError !== undefined) {
          if (this.tokenError.name === 'TokenExpiredError') {
            this.Consent();
          }
        } else {
          sessionStorage.setItem('Id', this.id);
          sessionStorage.setItem('lastLoggedInTime', this.lastLoggedInTime);
          sessionStorage.setItem('email', this.userDetails.email);
          sessionStorage.setItem('JwtToken', this.userDetails.Idtoken);
          if (this.userDetails.Idtoken === null || this.userDetails.Idtoken === '') {
            this.Consent();
          } else {
            this.route.navigate(['home']);
          }

        }
      }

    }, error => {
      console.error('error---------->>>>>', error);
    });


  }

  Consent() {
    const temp = {
      submit: 'Allow access',
      scope: this.openId,
      id: this.id,
    };
    this.loginservice.Consent(temp).subscribe(consentValue => {
      if (consentValue.Access !== undefined) {
        this.accessLevel = consentValue.Access[0];
        this.permission.push(this.accessLevel);
        this.broadcast.sendMessage({ 'Access': this.permission });
        sessionStorage.setItem('Access', JSON.stringify (this.permission));

      }
      this.userDetails = consentValue.Userdetails;
      this.id = this.userDetails._id;
      this.lastLoggedInTime = this.userDetails.loggedinDate;
      this.route.navigate(['home']);
      sessionStorage.setItem('Id', this.id);
      sessionStorage.setItem('lastLoggedInTime', this.lastLoggedInTime);
      sessionStorage.setItem('email', this.userDetails.email);
      sessionStorage.setItem('JwtToken', this.userDetails.Idtoken);
    }, error => {
      console.error('error: ', error);
    });

  }
}
