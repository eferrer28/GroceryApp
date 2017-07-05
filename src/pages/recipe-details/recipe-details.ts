import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeServiceProvider } from '../../providers/recipe-service/recipe-service';


@IonicPage()
@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public recipeService: RecipeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');

  }

}
