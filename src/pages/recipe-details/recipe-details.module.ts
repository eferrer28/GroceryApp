import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailsPage } from './recipe-details';

@NgModule({
  declarations: [
    RecipeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetailsPage),
  ],
  exports: [
    RecipeDetailsPage
  ]
})
export class RecipeDetailsPageModule {}
