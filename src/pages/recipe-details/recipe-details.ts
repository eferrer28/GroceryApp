import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeServiceProvider } from '../../providers/recipe-service/recipe-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {

  recipeSteps = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public recipeService: RecipeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');

    //this.recipeService.callFunc2();

    /*
    this.recipeService.callFunc2().subscribe(
      data => {this.recipeSteps = data
      console.log(data);
      console.log(JSON.stringify(this.recipeSteps));
    });

    */
    //this.recipeService.gettingId();

    this.doObservable();
  }

  doObservable(){
    this.recipeService.gettingId();

    this.recipeService.callFunc2().subscribe(
      data => {this.recipeSteps = data
      console.log(data);
      console.log(JSON.stringify(this.recipeSteps));
    });


  }
}
