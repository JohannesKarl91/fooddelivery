import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  template:`{{ foodMenu | json }}`
})

export class MainComponent implements OnInit {
 constructor() { }

ngOnInit(): void { }

}
