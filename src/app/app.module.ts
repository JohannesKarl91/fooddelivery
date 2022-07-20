import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';
import { foodMenuFavorite, foodMenuApetizer, foodMenuClassicburger, foodMenuGourmetburger, foodMenuSidedish, foodMenuDessert } from './global-variables/food-menu.global-variable';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';


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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [FoodCartComponent,
  { provide: 'FOODMENUFAVORITE', useValue: foodMenuFavorite },
  { provide: 'FOODMENUAPETIZER', useValue: foodMenuApetizer },
  { provide: 'FOODMENUCLASSICBURGER', useValue: foodMenuClassicburger },
  { provide: 'FOODMENUGOURMETBURGER', useValue: foodMenuGourmetburger },
  { provide: 'FOODMENUSIDEDISH', useValue: foodMenuSidedish },
  {provide: 'FOODMENUDESSERT', useValue: foodMenuDessert}],
  bootstrap: [AppComponent]
})
export class AppModule { }
