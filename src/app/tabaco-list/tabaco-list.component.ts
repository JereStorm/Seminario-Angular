import { Component, OnInit } from '@angular/core';
import { Tabaco } from './Tabaco';

@Component({
  selector: 'app-tabaco-list',
  templateUrl: './tabaco-list.component.html',
  styleUrls: ['./tabaco-list.component.scss']
})
export class TabacoListComponent implements OnInit {

  tabacos: Tabaco[] = [
    {
      name: 'Lucky',
      type: 'Comun',
      price: 420,
      stock: 0,
      clearence: true,
    },
    {
      name: 'Lucky',
      type: 'Comun',
      price: 420,
      stock: 20
    },
    {
      name: 'Las Hojas',
      type: 'Comun',
      price: 600,
      stock: 50
    },
    {
      name: 'Savage',
      type: 'Natural',
      price: 550,
      stock: 13,
      clearence: true,

    },
    {
      name: 'Pachamama',
      type: 'Uva',
      price: 350,
      stock: 67
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
