import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  public show: boolean;
  public signupform: FormGroup;
  public socialSignup: Boolean = false;
  public submit;



  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.show = false;

  }

  ngOnInit() {
    this.signupform = new FormGroup({
      signupdata: new FormGroup({
        firstname: new FormControl(null, [Validators.required , Validators.pattern('(?!-)[a-zA-Z-]*[a-zA-Z]$')]),
        lastname: new FormControl(null, [Validators.required ,Validators.pattern('(?!-)[a-zA-Z-]*[a-zA-Z]$')]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')])
      })
    });
  }

  signup() {
    this.submit = true;

    // stop here if form is invalid
    if (this.signupform.invalid) {
      return;
    }
    const singupinfo = {
      firstName: this.signupform.value.signupdata.firstname,
      lastName: this.signupform.value.signupdata.lastname,
      email: this.signupform.value.signupdata.email,
      password: this.signupform.value.signupdata.password
    };
    this.loginService.signup(singupinfo).subscribe(data => {
      this.router.navigate(['login']);
    });
  }

  hideEye() {
    this.show = !this.show;
  }

}
