import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list :any;
  tempcnt:any;
  tempdata:any;

  constructor(public navCtrl: NavController,public http : Http) {
    this.list = ["Sakthi","Usha"];
    this.tempcnt = {'account':'aaaaa','password':'bbbbb'};
    this.tempdata = 'tempdata123';
  }

  backcontent(){
    this.tempcnt = {'account':'aaaaa','password':'bbbbb'};
  }
  
  postcontent(){
    this.http.get('http://54.250.157.53:8081/accounts').map(res => res.json()).subscribe(people => this.tempcnt = people[0]);
    console.log("12345678900000");
  }
}
