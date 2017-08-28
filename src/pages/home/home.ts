import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //splash = true;
  //secondPage = SecondPagePage;

  shoppingItems: FirebaseListObservable<any[]>;

  newItem = '';
  list = [];

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
    
  
  }

  ionViewDidLoad(){
    /*
    setTimeout(() => {
      this.splash = false;
    }, 4000);
    */
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
    this.list.push(this.newItem);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  clearList() {
    this.firebaseProvider.clearList();
    this.list.splice(0);


  }

  addToPantry() {


    this.shoppingItems.subscribe(shoppingItems => {
        // items is an array
        shoppingItems.forEach(item => {
            console.log('Item:', item);
        });
    });
    console.log(this.list);
    var i;
    for (i in this.list) {
      console.log(this.list[i]);
      this.firebaseProvider.addToPantry(this.list[i]);

    }

}
}
