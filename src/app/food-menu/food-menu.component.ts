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


  constructor() { }

  ngOnInit(): void {  }


  //Via onclick the user can mark the restaurant as a favorite one. 
  changeIntoFavorite() {
    if (this.favoriteBtn == false) {
      this.setFavoriteRestaurant();
    }
    else {
      this.removeFavoriteRestaurant();
    }
  }


  setFavoriteRestaurant() {
    let favoriteButtonUnset = document.getElementById('button-favorite-unset');
    let favoriteButtonSet = document.getElementById('button-favorite-set');
    favoriteButtonUnset?.classList.add('d-none');
    favoriteButtonSet?.classList.remove('d-none');
    this.favoriteBtn = true;
  }


  removeFavoriteRestaurant() {
    let favoriteButtonUnset = document.getElementById('button-favorite-unset');
    let favoriteButtonSet = document.getElementById('button-favorite-set');
    favoriteButtonUnset?.classList.remove('d-none');
    favoriteButtonSet?.classList.add('d-none');
    this.favoriteBtn = false;
  }


  openSearchMode() {
    let searchMode = document.getElementById('search-mode');
    searchMode?.classList.remove('d-none');
    searchMode?.classList.add('d-flex');
    let startMode = document.getElementById('start-mode');
    startMode?.classList.add('d-none');
  }


  closeSearchMode(){
    let searchMode = document.getElementById('search-mode');
    searchMode?.classList.add('d-none');
    searchMode?.classList.remove('d-flex');
    let startMode = document.getElementById('start-mode');
    startMode?.classList.remove('d-none');
  }
}
