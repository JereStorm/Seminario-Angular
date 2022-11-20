import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tabaco } from './tabaco-list/Tabaco';

@Injectable({
  providedIn: 'root',
})

/**
 * MANEJA LA LOGICA DEL CARRITO
 */
export class TabacoCartService {
  constructor() {}

  //OBSERVABLE
  private _shopList: Tabaco[] = [];

  //OBSERVATOR
  shopList: BehaviorSubject<Tabaco[]> = new BehaviorSubject(this._shopList);

  spliceToCart(e: Tabaco) {
    let item: Tabaco | undefined = this._shopList.find(
      (v1) => v1.name == e.name
    );
    if (typeof item != 'undefined') {
      this._shopList = this._shopList.filter((v1) => v1.name != e.name);
      this.shopList.next(this._shopList);
    }
  }

  //agrego al shopList el tabaco seleccionado (LOGICA)
  addToCart(tabaco: Tabaco) {
    //buscador del objeto
    let item: Tabaco | undefined = this._shopList.find(
      (v1) => v1.name == tabaco.name
    );

    if (typeof item == 'undefined') {
      //creamos una copia del objeto a aprtir de sus atributos
      this._shopList.push({ ...tabaco });
    } else {
      item.quantity += tabaco.quantity;
    }
    this.shopList.next(this._shopList);
  }

  getSize(): number {
    return this._shopList.length;
  }

  getTotal(): number {
    let total: number = 0;
    this._shopList.forEach((tabaco) => {
      total += tabaco.price * tabaco.quantity;
    });

    return total;
  }
}
