import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../../providers/auth';
import {UserProvider} from '../../providers/user';
import {ChatProvider} from '../../providers/chat';
import {ChatViewPage} from '../chat-view/chat-view';
import {AngularFire} from 'angularfire2';

/*
  Generated class for the Chats page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  chats:Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public chatProvider:ChatProvider,
  public userProvider:UserProvider,
  public af:AngularFire
  ) {
    this.chatProvider.getChats()
      .then(chat => {
        this.chats =chat.map(users => {
          return users.map(user => {
            user.info = this.af.database.object(`/users/${user.$key}`);
            return user;
          });
        });
      });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ChatsPage');
  // }

  openChat(key){
    this.userProvider.getUid()
      .then(uid => {
        let param ={uid:uid, data:key};
        this.navCtrl.push(ChatViewPage,param);
      });
  }

}
