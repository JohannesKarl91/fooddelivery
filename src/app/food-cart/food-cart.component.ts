import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.scss']
})
export class FoodCartComponent implements OnInit {
  foodCart: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.loadCartFromLocalStorage()
  }


  loadCartFromLocalStorage() {
    var cartAsText = localStorage.getItem('cart') || '{}';
    this.foodCart = JSON.parse(cartAsText);
    console.log('this.foodCart from food-cart.component.ts', this.foodCart)

  }

}
