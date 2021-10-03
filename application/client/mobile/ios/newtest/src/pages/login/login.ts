import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginServiceProvider} from '../../providers/login-service/login-service';
import { LandingPage } from '../../landing/landing';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public user = {
    email: "",
    password: ""
  }

  public error : any;




  constructor(
    public navCtrl: NavController,
    public loginService: LoginServiceProvider,


    ) {
    this.user;
  }

  goHome() {
    console.log("---go home");
    this.navCtrl.setRoot(HomePage);

  }

  login() {
      console.log('login--clicked-->>', this.user);
    this.loginService.login(this.user).subscribe(response => {
      console.log('i am respones--->>>', response)
      if(response._id){
        this.navCtrl.setRoot(LandingPage);
      }else{
        this.error = response
      }
    })

  }
}
