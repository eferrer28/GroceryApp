import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalstorageProvider {

  constructor(public http: Http,
  private storage:Storage) {
    console.log('Hello LocalstorageProvider Provider');
  }

  //store the ingredients
  setIngredients(ingredients){
  this.storage.set('ingredients',ingredients);
  }

  //get the stored ingredients
  getIngredients(){
    this.storage.get('ingredients').then(ingredients=>{
      console.log('ingredients: '+ ingredients);
    });
  }

  //delete the ingredients address
  removeIngredients(){
  this.storage.remove('ingredients').then(()=>{
      console.log('ingredients is removed');
    });
  }

  //clear the whole local storage
  clearStorage(){
    this.storage.clear().then(()=>{
  console.log('all keys are cleared');
    });
  }

}
