import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {
  grades: Array<any> = [
    'star_black.svg', 'star_black.svg',
    'star_black.svg',
    'star_half_black.svg',
    'star_border_black.svg'
  ];
  conditions: Array<any> = [
    { logo: 'av_timer_black.svg', value: '33 - 50 min' },
    { logo: 'pedal_bike_black.svg', value: '0.50 €' },
    { logo: 'shopping_cart_black.svg', value: 'Min. 10,00 €' }
  ];
  favoriteBtn: Boolean = false;


  constructor(@Inject('FOODMENU') public foodMenu: any[]) { }

  ngOnInit(): void {
    console.log('All items of FOODMENU in "food-menu.component.ts" are:', this.foodMenu)
  }


  changeIntoFavorite() {

    if (this.favoriteBtn == false) {
      let favoriteButtonUnset = document.getElementById('button-favorite-unset');
      let favoriteButtonSet = document.getElementById('button-favorite-set');
      favoriteButtonUnset?.classList.add('d-none');
      favoriteButtonSet?.classList.remove('d-none');
      this.favoriteBtn = true;
    }

    else {
      let favoriteButtonUnset = document.getElementById('button-favorite-unset');
      let favoriteButtonSet = document.getElementById('button-favorite-set');
      favoriteButtonUnset?.classList.remove('d-none');
      favoriteButtonSet?.classList.add('d-none');
      this.favoriteBtn = false;
    }
  }
}
