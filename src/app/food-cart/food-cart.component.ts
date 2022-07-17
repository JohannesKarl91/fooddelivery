import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.scss']
})
export class FoodCartComponent implements OnInit {
  foodCart: Array<any> = [];
  emptyCart: Boolean = true;
  foodCartSum: any = 0;
  deliveryCosts = 1;
  totalCosts: any = this.foodCartSum + this.deliveryCosts;
  achievedMinimumSum: Boolean = false;


  constructor() { }

  //Section renders & updates food cart OnInit or by changing amounts of food items.
  ngOnInit(): void {
    this.renderFoodCart();
  }


  renderFoodCart() {
    this.loadCartFromLocalStorage();
    this.checkEmptyCart();
    this.calculateCartSum();
    this.checkMinimumSum();
  }


  updateFoodCart() {
    this.updateLocalStorage();
    this.checkEmptyCart();
    this.calculateCartSum();
    this.checkMinimumSum();
  }



  //Checks whether the foodCart array is empty for showing the emptyCart text to user.
  checkEmptyCart() {
    if (this.foodCart.length > 0) {
      this.emptyCart = false;
    }
  }



  // User is able to change the amount of food item in cart.
  increaseAmount(arrayId: number) {
    let arrayElement = this.foodCart[arrayId];
    arrayElement.amount++;

    this.updateFoodCart();
  }


  decreaseAmount(arrayId: number) {
    let arrayElement = this.foodCart[arrayId];
    arrayElement.amount--;

    this.checkAmountToZero(arrayId);
    this.updateFoodCart();
  }


  checkAmountToZero(arrayId: number) {
    let arrayElement = this.foodCart[arrayId];

    if (arrayElement.amount <= 0) {
      this.foodCart.splice(arrayId, 1);
      this.emptyCart = true;
      this.updateLocalStorage();
      this.checkEmptyCart();
      this.checkMinimumSum();
    }
  }



  //Calculation of food cart sum section
  calculateCartSum() {
    this.foodCartSum = 0;

    for (let i = 0; i < this.foodCart.length; i++) {
      const foodCartElement = this.foodCart[i];
      this.foodCartSum += foodCartElement['amount'] * foodCartElement['price'];
    }

    this.totalCosts = this.foodCartSum + this.deliveryCosts;
    // console.log('this.foodCartSum', this.foodCartSum);
  }


  checkMinimumSum() {
    let calculatedSum: Number = this.foodCartSum;
    console.log('calculatedSum', calculatedSum)

    if (calculatedSum > 6) {
      this.achievedMinimumSum = true;
      console.log('this.achievedMinimumSum', this.achievedMinimumSum)
    }
    else if (calculatedSum <= 6) {
      this.achievedMinimumSum = false;
    }
  }


  // renderOrderButton() {
  //   let buttonElement = document.getElementById('CartOrderButton');
  //   buttonElement


  //   // if (this.foodCartSum >= 6) {
  //   //   orderBtn?.classList.remove('d-lightgrey');
  //   //   orderBtn?.classList.add('d-primary');
  //   //   console.log('Content of this.foodCartSum in function "renderOrderButton()', this.foodCartSum)
  //   // }
  // }


  //*---------- LocalStorage Section ----------*//
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
    // console.log('this.foodCart from food-cart.component.ts', this.foodCart)
  }
}
