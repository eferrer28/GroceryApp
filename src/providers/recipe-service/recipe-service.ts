import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RecipeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RecipeServiceProvider Provider');

    let opt: RequestOptions
    let myHeaders: Headers = new Headers
    myHeaders.append('X-Mashape-Key: KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse');
    myHeaders.append('Content-type', 'application/json');

    opt = new RequestOptions({
    headers: myHeaders
  });
  }


  getData(){
    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1', opt).map(data =>json());
  }

}
