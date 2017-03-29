import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {FirebaseAuth, FirebaseRef, AngularFire} from ' angularfire2';
import{LocalStorage, Storage} from ' ionic-angular';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  local = new Storage(LocalStorage);


  constructor(public http: Http,public af:AngularFire) {
    console.log('Hello Auth Provider');
  }

  //getAuth
  getAuth(){//return fb sdk method
    return firebase.auth();
  }


  //login
  login(credentials){
    console.log('Log in user');
    return this.af.auth.login(credentials)
  }

  //createAccount
  createAccount(credentials){
    console.log('Create user login ');
    return this.af.auth.createUser(credentials);
  }


  //logout
  logout(){
    console.log(`User log out...`);
    firebase.auth().signOut();
  }

}
