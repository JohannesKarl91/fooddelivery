import { Component, OnInit, Inject, Provider } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrls: ['./food-menu-list.component.scss']
})
export class FoodMenuListComponent implements OnInit {
  foodItemsToFoodCart : Array<any> = [];


  constructor(public firestore: AngularFirestore, @Inject('FOODMENUFAVORITE') public foodMenuFavorite: any[],
    @Inject('FOODMENUAPETIZER') public foodMenuApetizer: any[],
    @Inject('FOODMENUCLASSICBURGER') public foodMenuClassicburger: any[],
    @Inject('FOODMENUGOURMETBURGER') public foodMenuGourmetburger: any[],
    @Inject('FOODMENUSIDEDISH') public foodMenuSidedish: any[],
    @Inject('FOODMENUDESSERT') public foodMenuDessert: any[]) { }

  ngOnInit(): void {
    console.log('All items of FOODMENUFAVORITE in "food-menu.component.ts" are:', this.foodMenuFavorite);
    console.log('All items of FOODMENUAPETIZER in "food-menu.component.ts" are:', this.foodMenuApetizer);
    console.log('All items of FOODMENUCLASSICBURGER in "food-menu.component.ts" are:', this.foodMenuClassicburger);
    console.log('All items of FOODMENUGOURMETBURGER in "food-menu.component.ts" are:', this.foodMenuGourmetburger);
    console.log('All items of FOODMENUSIDEDISH in "food-menu.component.ts" are:', this.foodMenuSidedish);
    console.log('All items of FOODMENUDESSERT in "food-menu.component.ts" are:', this.foodMenuDessert);
  }


  //--*  Add-functions for all categories  *--//
  //Problem: Duplicates between favorite items and the items of other food categories
  addFavoriteToCart(id: any) {
    var foodItem = this.foodMenuFavorite[id];

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart)
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart)
    }
  }


  addApetizerToCart(id: any) {
    var foodItem = this.foodMenuApetizer[id];

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
  }


  addClassicburgerToCart(id: any) {
    var foodItem = this.foodMenuClassicburger[id];

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
  }


  addGourmetburgerToCart(id: any) {
    var foodItem = this.foodMenuGourmetburger[id];

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
  }


  addSidedishesToCart(id: any) {
    var foodItem = this.foodMenuSidedish[id];

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
  }


  addDessertToCart(id: any) {
    var foodItem = this.foodMenuDessert[id];

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage()
    }
  }


  //Save local cart array data in local storage for further use in food-cart component.
  saveCartContentToLocalstorage() {
    var foodCartToJSON = JSON.stringify(this.foodItemsToFoodCart);
    localStorage.setItem('cart', foodCartToJSON); 
  }
}



