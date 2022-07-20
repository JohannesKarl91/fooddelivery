import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FoodCartComponent } from '../food-cart/food-cart.component';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrls: ['./food-menu-list.component.scss']
})
export class FoodMenuListComponent implements OnInit {
  foodItemsToFoodCart: Array<any> = [];


  constructor(public firestore: AngularFirestore, @Inject('FOODMENUFAVORITE') public foodMenuFavorite: any[],
    @Inject('FOODMENUAPETIZER') public foodMenuApetizer: any[],
    @Inject('FOODMENUCLASSICBURGER') public foodMenuClassicburger: any[],
    @Inject('FOODMENUGOURMETBURGER') public foodMenuGourmetburger: any[],
    @Inject('FOODMENUSIDEDISH') public foodMenuSidedish: any[],
    @Inject('FOODMENUDESSERT') public foodMenuDessert: any[]) { }


  ngOnInit(): void { }


  //--*  Add-functions for all categories  *--//
  //Problem: Duplicates between favorite items and the items of other food categories
  addFavoriteToCart(id: any) {
    let foodItem = this.foodMenuFavorite[id];

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
    let foodItem = this.foodMenuApetizer[id];
    let foodCartObject = new FoodCartComponent();

    if (this.foodItemsToFoodCart.includes(foodItem)) {
      let position = this.foodItemsToFoodCart.indexOf(foodItem);
      this.foodItemsToFoodCart[position].amount++;
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage();
      foodCartObject.updateFoodCart();
    }
    else {
      this.foodItemsToFoodCart.push(foodItem);
      console.log('foodItemCart', this.foodItemsToFoodCart);
      this.saveCartContentToLocalstorage();
      foodCartObject.renderFoodCart();
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



