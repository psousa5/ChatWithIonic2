import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Alert} from 'ionic-angular';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilProvider {

  constructor(public http: Http) {
    console.log('Hello UtilProvider Provider');
  }

  doAlert(title, message, buttonText){
    console.log(message);
    //check again alert.create
    let alert =Alert.create({
      title:title,
      message:message,
      buttonText:[buttonText]
    });
    return alert;
  }

}
