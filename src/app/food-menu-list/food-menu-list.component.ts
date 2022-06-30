import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrls: ['./food-menu-list.component.scss']
})
export class FoodMenuListComponent implements OnInit {
  foodItemsToFoodCart: Array<any> = [];


  constructor(@Inject('FOODMENUFAVORITE') public foodMenuFavorite: any[],
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


  //--  Add-functions for all categories  --//
  addApetizerToCart(id: any) {
    var foodItem = this.foodMenuApetizer[id];

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


  addClassicburgerToCart(id: any) {
    var foodItem = this.foodMenuClassicburger[id];

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


  addGourmetburgerToCart(id: any) {
    var foodItem = this.foodMenuGourmetburger[id];

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


  addSidedishesToCart(id: any) {
    var foodItem = this.foodMenuSidedish[id];

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


  addDessertToCart(id: any) {
    var foodItem = this.foodMenuDessert[id];

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
}
