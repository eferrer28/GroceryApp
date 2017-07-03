import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RecipeServiceProvider } from '../../providers/recipe-service/recipe-service';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Generated class for the RecipesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  //name: Observable<any>;
  recipeData = [];

  constructor(public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public recipeService: RecipeServiceProvider,
    public localstorage: LocalstorageProvider) {
    console.log("hey!")
    //this.name = recipeService.getData();

  }

  ionViewDidLoad() {

    console.log(this.navParams.get('selected'));

    console.log('ionViewDidLoad RecipesPage');
    this.recipeService.loadStuff().subscribe(
      data => {this.recipeData = data
      console.log(data);
      console.log(JSON.stringify(this.recipeData));
    });
  }

}
