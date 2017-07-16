import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { RecipeServiceProvider } from '../../providers/recipe-service/recipe-service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import {Storage} from '@ionic/storage';
import { RecipesPage } from '../../pages/recipes/recipes';


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
  ourList = [];




  constructor(public firebaseProvider: FirebaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage:Storage,
    public recipeService: RecipeServiceProvider) {
    this.pantryItems = this.firebaseProvider.getPantryItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantryPage');
    this.storage.clear();

  }



  checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}



  add(item, idx:number){
    console.log(item);
    //this.item = item;
    this.currentSelected = idx;
    console.log(this.currentSelected);


    if(this.checkAvailability(this.ingredients, item) == false){
      this.ingredients.push(item);
    }
    else{
      var index = this.ingredients.indexOf(item, 0);
      if (index > -1) {
        this.ingredients.splice(index, 1);
}
      }
    console.log(this.ingredients);



}

  getRecipes(){

    /*
    console.log('test');
    this.storage.length().then(result => {
      if(result > 0){
        console.log('wat');
        this.storage.clear();
      }
    })
    */


  //this.storage.set('thelist', JSON.stringify(this.ingredients));
    this.recipeService.callFunc(this.ingredients);
    this.navCtrl.push(RecipesPage);


  //  this.storage.set('thelist', this.ingredients);

  }
}
