import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../../providers/auth';
import {UserProvider} from '../../providers/user';
import {ChatProvider} from '../../providers/chat';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import{LocalStorage, Storage} from ' ionic-angular';

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  rootNav;
  user ={};
  local = new Storage(localStorage);

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public auth:AuthProvider, public userProvider:UserProvider
  ) {
    this.userProvider.
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }


  logout(){
    console.log('log out');
    this.local.remove('userInfo');//remove in the local storage
    this.auth.logout();
  }

}
