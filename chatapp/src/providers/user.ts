import { Injectable ,Inject} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseRef, AngularFire} from 'angularfire2';
import{LocalStorage, Storage} from ' ionic-angular';
import {Camera} from 'ionic-native';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  local = new Storage(LocalStorage);

  constructor(public http: Http, public af: AngularFire) {
    console.log('Hello User Provider');
  }
  //get current user uid
  getUid(){
    return this.local.get('userInfo')
      .then(value => {
        let newValue = JSON.parse(value);
        return newValue.uid;
      });
  }

  //create user in firebase
  createUser(userCredentials){
    console.log('creating user in firebase...');
    this.getUid().then(uid => {
      let currentUserRef =  this.af.database.object(`/users/${uid}`);//save in database users node
      currentUserRef.set({email:userCredentials.email});
    });
  }

  //get infor of single user
  getUser() {
    //get uid
    return this.getUid().then(uid => {
      return this.af.database.object(`/users/${uid}`);
    });
  }

  //getAll users of import { NgModule } from '@angular/core';
  getAllUsers(){
    return this.af.database.list(`/users`);
  }
  //get base 64 picture of user
  getPicture() {
    console.log('getting picture');
    let base64Picture;
    let options ={
      destinationType:0,
      sourceType:0,
      encodingType:0
    };
    let promise =new Promise((resolve, reject) => {
      Camera.getPicture(options)
        .then((imgData) => {
          base64Picture = "data:image/jpeg;base64,"+ imgData;
          resolve(base64Picture);
        },(err) => {
          reject(err);
        });
    });
    return promise;
  }
  //update provide picture of user
  updatePicture(){
    console.log(`Updating picture`);
    this.getUid().then(uid => {
      let pictureRef = this.af.database.object(`/users/${uid}/picture`);
      //we want to also get the picture immediate
      this.getPicture().then((img) => {
        pictureRef.set(img);
      });
    });
  }
}
