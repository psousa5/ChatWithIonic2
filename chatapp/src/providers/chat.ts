import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {FirebaseAuth, FirebaseRef, AngularFire} from ' angularfire2';
import {Observable} from 'rxjs/Observable';
import {UserProvider} from './user';

/*
  Generated class for the Chat provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChatProvider {

  constructor(public http: Http, public af:AngularFire, public up:UserProvider) {
    console.log('Hello Chat Provider');
  }

  //getchats:get a list of chats of logged user
  getChats() {
    return this.up.getUid().then(uid => {
      return this.af.database.list(`/users/${uid}/chats`);
    });
  }

  //addchats
  addChats(uid, content){
    //first user
    let otherUid = content;
    let endpoint =this.af.database.object(`/users/${uid}/chats/${content}`);
    endpoint.set(true);

    //second user
    let endpoint2 =this.af.database.object(`/users/${content}/chats/${uid}`);
    endpoint2.set(true);
  }

  //getchatref



}
