import { Injectable } from '@angular/core';
import { Tabaco } from './tabaco-list/Tabaco';

@Injectable({
  providedIn: 'root',
})

/**
 * MANEJA LA LOGICA DEL CARRITO
 */
export class TabacoCartService {
  constructor() {}

  //creo la lista de tabacos local
  shopList: Tabaco[] = [];

  //agrego al shopList el tabaco seleccionado (LOGICA)
  addToCart(tabaco: Tabaco) {
    //buscador del objeto
    let item: Tabaco | undefined = this.shopList.find(
      (v1) => (v1.name = tabaco.name)
    );

    if (!item) {
      //creamos una copia del objeto a aprtir de sus atributos
      this.shopList.push({ ...tabaco });
    } else {
      item.quantity += tabaco.quantity;
    }
    console.log(this.shopList);
  }

  getSize(): number {
    return this.shopList.length;
  }
}
