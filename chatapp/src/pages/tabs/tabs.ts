import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChatsPage} from '../chats/chats';
import {AccountPage} from '../account/account';
import {UsersPage} from '../users/users';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  chats =ChatsPage;
  account= AccountPage;
  users = UsersPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
