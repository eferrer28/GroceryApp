import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the PantryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pantry',
  templateUrl: 'pantry.html',
})
export class PantryPage {
  pantryItems: FirebaseListObservable<any[]>;


  constructor(public firebaseProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.pantryItems = this.firebaseProvider.getPantryItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantryPage');
  }

}
