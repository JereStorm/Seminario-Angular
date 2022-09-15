import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabaco-list',
  templateUrl: './tabaco-list.component.html',
  styleUrls: ['./tabaco-list.component.scss']
})
export class TabacoListComponent implements OnInit {

  tabaco = {
    name: 'Lucky',
    type: 'Comun',
    price: 420,
    stock: 20

  }

  constructor() { }

  ngOnInit(): void {
  }

}
