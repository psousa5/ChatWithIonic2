import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Content } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../../providers/auth';
import {UserProvider} from '../../providers/user';
import {ChatProvider} from '../../providers/chat';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the ChatView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat-view',
  templateUrl: 'chat-view.html'
})
export class ChatViewPage {
  chats:FirebaseListObservable<any>;
  message:string;
  interlocutor:string;

  uid:string;
  @ViewChild(Content) content:Content;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public chatProvider:ChatProvider,
  public userProvider:UserProvider,
  public af:AngularFire,
  params:NavParams
  ) {
    this.uid= params.data.uid;
    this.interlocutor =params.data.data;
    //get chat ref
    chatProvider.getChatRef(this.uid, this.interlocutor)
      .then((chatRef:any) => {
        this.chats = this.af.database.list(chatRef);
      })
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ChatViewPage');
    this.content.scrollToBottom();
  }



  sendMessage(){
    if(this.message) {
      let chat= {
        from:this.uid,
        message:this.message,
        type:'message'
      };
      this.chats.push(chat);
      this.message = "";//empty it
    }
  }




  //sendPic
  sendPicture(){
    let chat ={from:this.uid,type:'picture',picture:null};
    this.userProvider.getPicture()
      .then((img) => {
        chat.picture =img;
        this.chats.push(chat);
      });
  }

}
