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
  id: number = 0;
  keys: String[];
  notSure = {};




  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public recipeService: RecipeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');



    this.doObservable();
    this.heh();
  }



  doObservable(){
    //this.recipeService.gettingId();
    this.id = this.navParams.get('param');

    this.recipeService.callFunc2(this.id).subscribe(
      data => {this.recipeSteps = data
      console.log(data);
      console.log(JSON.stringify(this.recipeSteps));
      this.notSure = Object.keys(this.recipeSteps)
      //console.log(this.notSure);
      //this.keys = Object.keys(data);


    });


  }

  heh(){
    for(let x of Object.keys(this.recipeSteps)){
        console.log(x);
    }

  }





}
