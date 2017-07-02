import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { RecipesPage } from '../../pages/recipes/recipes';


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
  selected = [];
  public items: Array<any>;
  currentSelected: number = null;
  hightlightStatus: Array<boolean> = [];
  ingredients = [];




  constructor(public firebaseProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.pantryItems = this.firebaseProvider.getPantryItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantryPage');
  }

  onSelect(){
    if(this.selected.length == 3){
      console.log("fuck");
      console.log(this.selected);
      this.navCtrl.push(RecipesPage, this.selected);
    }
  }

  checkAvailability(arr, val ){
    return arr.some(arrVal =>  val === arrVal);
  }



  add(item, idx:number){
    console.log(item);
    //this.item = item;
    this.currentSelected = idx;
    console.log(this.currentSelected);

    if(this.checkAvailability(this.ingredients, item) == false){
      this.ingredients.push(item);
    }
    console.log(this.ingredients);

  }

}
