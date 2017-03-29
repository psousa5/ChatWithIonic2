import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {AuthProvider} from '../../providers/auth';
import {UserProvider} from '../../providers/user';
import {ChatProvider} from '../../providers/chat';
import {ChatViewPage} from '../chat-view/chat-view';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users:Observable<any[]>;
  uid:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userProvider :UserProvider,
  public chatProvider:ChatProvider) {
    userProvider.getUid()
      .then((uid) => {
        this.uid = uid;//get id of the logged in user
        this.users = this.userProvider.getAllUsers();///get all the users in the list of logged in user

      });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UsersPage');
  // }

  openChat(key){
    let param ={uid:this.uid,data:key};
    this.navCtrl.push(ChatViewPage,param);
  }

}
