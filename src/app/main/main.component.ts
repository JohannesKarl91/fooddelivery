import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  template:`{{ foodMenu | json }}`
})

export class MainComponent implements OnInit {
 constructor(@Inject('FOODMENU') public foodMenu: any[]) { }

ngOnInit(): void {
  console.log('All items of FOODMENU are:', this.foodMenu)
}

}
