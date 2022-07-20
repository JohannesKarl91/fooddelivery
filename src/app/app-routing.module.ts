import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';

const routes: Routes = [
  {path:'foodCart', component:FoodCartComponent},
  {path: 'foodMenuList', component:FoodMenuListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
