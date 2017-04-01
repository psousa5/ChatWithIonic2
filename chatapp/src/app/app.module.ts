import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FIREBASE_PROVIDERS,defaultFirebase,firebaseAuthConfig,AuthProviders,AuthMethods,AngularFireModule} from 'angularfire2';
import {bootstrap} from 'bootstrap';
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyArwzy5ZW9iQp0548kMDZNWbV1U_sKiy00",
     authDomain: "chatwithionic2.firebaseapp.com",
     databaseURL: "https://chatwithionic2.firebaseio.com",
     storageBucket: "chatwithionic2.appspot.com",
     messagingSenderId: "752856510663"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp,[FIREBASE_PROVIDERS, defaultFirebase({
    apiKey: "AIzaSyArwzy5ZW9iQp0548kMDZNWbV1U_sKiy00",
     authDomain: "chatwithionic2.firebaseapp.com",
     databaseURL: "https://chatwithionic2.firebaseio.com",
     storageBucket: "chatwithionic2.appspot.com",
     messagingSenderId: "752856510663"
  }),
  firebaseAuthConfig({
    provider:AuthProviders.Facebook,
    method:AuthMethods.Redirect
  })]],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
