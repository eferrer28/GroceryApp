import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PantryPage } from '../pages/pantry/pantry';
import { RecipeDetailsPage } from '../pages/recipe-details/recipe-details';
import { RecipesPage } from '../pages/recipes/recipes';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { RecipeServiceProvider } from '../providers/recipe-service/recipe-service';
import { IonicStorageModule } from '@ionic/storage';
import { KeysPipe } from '../pipes/keys/keys';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const firebaseConfig = {
    apiKey: "AIzaSyCCVJNUHxsVIPstdq_jaT0r0tZ1w_oE_N3g",
    authDomain: "grocery-app-c4189.firebaseapp.com",
    databaseURL: "https://grocery-app-c4189.firebaseio.com",
    projectId: "grocery-app-c4189",
    storageBucket: "grocery-app-c4189.appspot.com",
    messagingSenderId: "790095058387"

};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '091d392f'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PantryPage,
    RecipesPage,
    RecipeDetailsPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PantryPage,
    RecipesPage,
    RecipeDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecipeServiceProvider,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
