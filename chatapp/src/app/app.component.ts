import { Component,Inject } from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage}from '../pages/login/login';

import {AuthProvider}from '../providers/auth';
import {ChatProvider}from '../providers/chat';
import {UserProvider}from '../providers/user';
import {UtilProvider}from '../providers/util';

import {
FIREBASE_PROVIDERS,
defaultFirebase,
firebaseAuthConfig,
FirebaseRef,
AngularFire,
AuthProviders,
AuthMethods

} from 'angularfire2';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  message:string;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public authProvider:AuthProvider,

  ) {
    let auth = authProvider.getAuth();
    auth.onAuthStateChanged(user => {
      if(user) {
        this.rootPage =TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}



// <script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyArwzy5ZW9iQp0548kMDZNWbV1U_sKiy00",
//     authDomain: "chatwithionic2.firebaseapp.com",
//     databaseURL: "https://chatwithionic2.firebaseio.com",
//     storageBucket: "chatwithionic2.appspot.com",
//     messagingSenderId: "752856510663"
//   };
//   firebase.initializeApp(config);
// </script>
