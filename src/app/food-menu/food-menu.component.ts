import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  constructor(@Inject('FOODMENU') public foodMenu: any[]) { }

  ngOnInit(): void {
    console.log('All items of FOODMENU in "food-menu.component.ts" are:', this.foodMenu)
  }

}
