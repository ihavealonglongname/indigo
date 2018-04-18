import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  btnName:String = "BTN";
   constructor(public navCtrl: NavController) {

  }
  itemTapped() {
    //console.log('Device UUID is: ' + this.device.uuid );
    this.navCtrl.setRoot(HomePage);
  }
}
