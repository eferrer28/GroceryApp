import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';


@Injectable()
export class RecipeServiceProvider {

  lessons = [];
  ourList = [];
  idInfo = [];
  id: number = 0;

  constructor(public http: Http,
    public storage: Storage) {
    console.log('Hello RecipeServiceProvider Provider');


  }
  callFunc(){
    this.storage.get('thelist').then(data => {
          console.log(data);
          this.ourList = JSON.parse(data);
        //this.ourList = data;
          console.log(this.ourList);
        });

  }

  gettingId(){
    this.storage.get('theID').then(data => {
          console.log(data);
          this.idInfo = JSON.parse(data);
        //this.ourList = data;
        this.id = this.idInfo['id'];
        console.log(this.id);
          console.log((this.idInfo)['id'])
         // this.getSteps();
       });
  }



   callFunc2(){



         console.log("mmm hmm ");
         let opt: RequestOptions;
         let myHeaders: Headers = new Headers;
         myHeaders.append('X-Mashape-Key', 'KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse');
         myHeaders.append('Content-type', 'application/json');
         opt = new RequestOptions({
         headers: myHeaders
       })
         return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+this.id+'/analyzedInstructions', opt).map(res => res.json())

   }

  loadStuff(){

    console.log(this.ourList);
    var lengthOf = this.ourList.length;
    console.log(lengthOf);
    var newString = '';
    var stuff = '%2C';
    for(let i of this.ourList){
      newString += i.concat(stuff);
      console.log(newString);

    var str = newString.slice(0, -3);
    console.log(str);
    }

    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.append('X-Mashape-Key', 'KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
    headers: myHeaders
  })
    //return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1', opt).map(res => res.json())

    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients='+ str +'&limitLicense=false&number='+ lengthOf +'&ranking=1', opt).map(res => res.json())


  }
  getRecipe(){
    //this.navCtrl.push(RecipeDetailsPage, id);
    this.storage.get('thelist').then(data => {
          console.log(data);
          this.ourList = JSON.parse(data);
          console.log(this.ourList);
        });
  }




}
