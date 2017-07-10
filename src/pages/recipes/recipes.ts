import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RecipeServiceProvider } from '../../providers/recipe-service/recipe-service';
import {Storage} from '@ionic/storage';
import { RecipeDetailsPage } from '../../pages/recipe-details/recipe-details';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  //name: Observable<any>;
  recipeData = [];
  ourList = [];
  theID: number = 0;


  constructor(public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public recipeService: RecipeServiceProvider,
    public storage: Storage) {
    console.log("hey!")

  }

  ionViewDidLoad() {
    /*
    this.storage.get('thelist').then(data => {
          console.log(data);
          this.ourList = JSON.parse(data);
          console.log(this.ourList);
        });
        */


    console.log('ionViewDidLoad RecipesPage');
    this.recipeService.loadStuff().subscribe(
      data => {this.recipeData = data
      console.log(data);
      console.log(JSON.stringify(this.recipeData));
    });
  }

  fetchRecipe(id){
    //this.navCtrl.push(RecipeDetailsPage, id);
    console.log(id);
    this.theID = id['id'];
    console.log(this.theID);
    this.navCtrl.push(RecipeDetailsPage, {param: this.theID});

    /*
    this.storage.set('theID', JSON.stringify(id));
    //this.recipeService.callFunc2(id);
  //  this.recipeService.gettingId();

    this.navCtrl.push(RecipeDetailsPage);
    */
  }

}
