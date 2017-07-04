import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

/*
  Generated class for the RecipeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipeServiceProvider {

  lessons = [];
  ourList = [];

  constructor(public http: Http,
  public storage: Storage) {
    console.log('Hello RecipeServiceProvider Provider');

    this.storage.get('thelist').then(data => {
          console.log(data);
          this.ourList = JSON.parse(data);
          console.log(this.ourList);
        });
    //this.loadStuff();

    /*
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.append('X-Mashape-Key', 'KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
    headers: myHeaders

  })
  console.log(this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1', opt).map(data => data.json()));
*/
  }
  loadStuff(){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.append('X-Mashape-Key', 'KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
    headers: myHeaders
  })
    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1', opt).map(res => res.json())
    /*
    .subscribe(
      res => console.log(res),
      lessons => this.lessons = lessons.json()
      //err => console.error(err)

    );*/

  }


  /*
  getData(){
    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1', this.opt).map(data => data.json());
  }*/

}
