import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }

  getPantryItems() {
    return this.afd.list('/pantryItems/');
  }


  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }

  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }

  clearList() {
    this.afd.list('/shoppingItems').remove();
  }

  addToPantry(name) {
    this.afd.list('/pantryItems/').push(name);

  }
}
