import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonNavigationComponent } from './button-navigation/button-navigation.component';

const routes: Routes = [
  { path: '', component: ButtonNavigationComponent }, // Set UserSelectionComponent as the default

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
