import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController} from 'ionic-angular';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilProvider {

  constructor(public http: Http,private alertCtrl:AlertController) {
    console.log('Hello UtilProvider Provider');
  }

  doAlert(title, message, buttonText){
    console.log(message);
    //check again alert.create
    let alert = this.alertCtrl.create({
      title:title,
      message:message,
      buttons:[buttonText]
    });
    return alert;
  }

}
