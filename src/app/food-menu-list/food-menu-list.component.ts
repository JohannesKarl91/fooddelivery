import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrls: ['./food-menu-list.component.scss']
})
export class FoodMenuListComponent implements OnInit {

  constructor(@Inject('FOODMENU') public foodMenu: any[]) { }

  ngOnInit(): void {
    console.log('All items of FOODMENU in "food-menu.component.ts" are:', this.foodMenu)
  }

}
