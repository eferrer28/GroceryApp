import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Deploy} from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PantryPage } from '../pages/pantry/pantry';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipeDetailsPage } from '../pages/recipe-details/recipe-details';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
     public splashScreen: SplashScreen, public deploy: Deploy) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Pantry', component: PantryPage },
      { title: 'Recipes', component: RecipesPage },
      { title: 'List', component: ListPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.deploy.check().then((snapshotAvailable: boolean) => {
          if (snapshotAvailable) {
            this.deploy.download().then(() => {
              return this.deploy.extract();
            }).then(() => {
              this.deploy.load();
            });
          }
});



    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
