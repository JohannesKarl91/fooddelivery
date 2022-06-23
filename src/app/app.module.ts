import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { foodMenu } from './global-variables/food-menu.global-variable';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FoodMenuComponent,
    FoodCartComponent,
    FoodMenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'FOODMENU', useValue: foodMenu } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
