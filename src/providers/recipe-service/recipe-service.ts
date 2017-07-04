import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';


@Injectable()
export class RecipeServiceProvider {

  lessons = [];
  ourList = [];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello RecipeServiceProvider Provider');



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
  callFunc(){
    var newString = ''
    this.storage.get('thelist').then(data => {
          console.log(data);
          this.ourList = JSON.parse(data);
        //this.ourList = data;
          console.log(this.ourList);
        });

  }

  loadStuff(){

    console.log(this.ourList);

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
