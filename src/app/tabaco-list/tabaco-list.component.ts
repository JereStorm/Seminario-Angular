import { Component, OnInit } from '@angular/core';
import { Tabaco } from './Tabaco';
import { TabacoCartService } from '../tabaco-cart.service';
import { TabacoDataService } from '../tabaco-data.service';

@Component({
  selector: 'app-tabaco-list',
  templateUrl: './tabaco-list.component.html',
  styleUrls: ['./tabaco-list.component.scss'],
})
export class TabacoListComponent implements OnInit {
  tabacos: Tabaco[] = [
    {
      name: 'Lenovotomia',
      type: 'Metalica',
      price: 456,
      stock: 100,
      clearence: true,
      quantity: 0,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'StormFire',
      type: 'Manzana',
      price: 450,
      stock: 45,
      clearence: false,
      quantity: 0,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'CocaQueen',
      type: 'CocaCola',
      price: 4200,
      stock: 420,
      clearence: true,
      quantity: 0,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'Gaucho',
      type: 'Natural',
      price: 422,
      stock: 34,
      clearence: true,
      quantity: 0,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'Lucky',
      type: 'Comun',
      price: 420,
      quantity: 0,
      stock: 20,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'Las Hojas',
      type: 'Comun',
      price: 600,
      quantity: 0,
      stock: 50,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'Savage',
      type: 'Natural',
      price: 550,
      stock: 13,
      quantity: 0,
      clearence: true,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
    {
      name: 'Pachamama',
      type: 'Uva',
      price: 350,
      quantity: 0,
      stock: 67,
      image:
        'https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/03/don-juan-tabaco-flandria-silver.jpg?resize=600%2C600&ssl=1',
    },
  ];

  constructor(
    private cart: TabacoCartService,
    private tabacoService: TabacoDataService
  ) {}

  ngOnInit(): void {}
  // Funciones de salida => "()"
  maxReached(m: string) {
    alert(m);
  }

  addToCart(tabaco: Tabaco): void {
    //chequeos primarios o de entrada
    if (tabaco.stock == 0 || tabaco.stock - tabaco.quantity < 0) {
      alert('No se puede comprar por falta de stock');
    } else if (tabaco.quantity == 0) {
      alert('Debe ingresar una cantidad para el producto seleccionado');
    } else {
      this.cart.addToCart(tabaco);
      tabaco.stock -= tabaco.quantity;
      tabaco.quantity = 0;
    }
  }
}
