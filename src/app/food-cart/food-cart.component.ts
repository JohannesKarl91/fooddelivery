import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.scss']
})
export class FoodCartComponent implements OnInit {
  foodCart: Array<any> = [];
  emptyCart: Boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.loadCartFromLocalStorage();
    this.checkEmptyCart();
  }




  //Checks whether the foodCart array is empty for showing the emptyCart text to user.
  checkEmptyCart() {
    if (this.foodCart.length > 0) {
      this.emptyCart = false;
    }
  }


  increaseAmount(arrayId: number) {
    let arrayElement = this.foodCart[arrayId];
    arrayElement.amount++;

    this.updateLocalStorage();
    this.checkEmptyCart();
  }

  decreaseAmount(arrayId: number) {
    let arrayElement = this.foodCart[arrayId];
    arrayElement.amount--;

    this.updateLocalStorage();
    this.checkEmptyCart();
  }



  //*---------- LocalStorage Section ----------//*
  //Methods for Loading and saving local cart array data in local storage for further use in food-cart component.
  updateLocalStorage() {
    this.saveCartContentToLocalstorage();
    this.loadCartFromLocalStorage();
  }

  saveCartContentToLocalstorage() {
    var foodCartToJSON = JSON.stringify(this.foodCart);
    localStorage.setItem('cart', foodCartToJSON);
  }

  loadCartFromLocalStorage() {
    var cartAsText = localStorage.getItem('cart') || '{}';
    this.foodCart = JSON.parse(cartAsText);
    console.log('this.foodCart from food-cart.component.ts', this.foodCart)
  }
}
