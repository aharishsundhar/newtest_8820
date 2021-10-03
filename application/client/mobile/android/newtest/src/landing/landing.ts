import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';


@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {
  }

  logOut() {
    this.navCtrl.setRoot(HomePage);
  }

}
