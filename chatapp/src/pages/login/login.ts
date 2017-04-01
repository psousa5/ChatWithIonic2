import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseAuthConfig,FirebaseAuthState} from 'angularfire2';
import {AuthProvider} from '../../providers/auth';
import {UsersProvider} from '../../providers/users';
import {UtilProvider} from '../../providers/util';
import {FormBuilder, Validators} from '@angular/form';
import {validateEmail} from '../../validators/email';
import{LocalStorage, Storage} from ' ionic-angular';
import {TabsPage} from '../tabs/tabs';



/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm:any;
  storage = new Storage(LocalStorage);

  constructor(public navCtrl: NavController, public navParams: NavParams,public form:FormBuilder,
  public userProvider:UsersProvider,
public auth:AuthProvider, public util:UtilProvider

  ) {
    console.log(`Going to login page`);
    this.loginForm =form.group({
      email:["",Validators.compose([Validators.required,validateEmail])],
      password:["",Validators.required]
    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //login

  login(){

  console.log(`User is log in `);
  this.auth.login(this.loginForm.value)
    .then((data) => {
      this.storage.set('userInfo',JSON.stringify(data));
      //navigate to the main chat app page
      this.navCtrl.push(TabsPage);
    },(err) => {
      let errMessage ="Enter correct email and password";
      let alert  = this.util.doAlert("Error",errMessage, "OK");
      this.navCtrl.present(alert);
    });


  }



  createAccount(){

  console.log(`User is creating account`);
  let credentials = this.loginForm.value;
  this.auth.createAccount(credentials)
    .then((data) => {
      this.storage.set('userInfo',JSON.stringify(data));
      this.userProvider.createUser(credentials);
    },(err) => {
      let errMessage ="Account already exists";
      let alert  = this.util.doAlert("Error",errMessage, "OK");
      this.navCtrl.present(alert);

    });


  }
}
