import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tabaco } from '../tabaco-list/Tabaco';
import { TabacoDataService } from './tabaco-data.service';

@Injectable({
  providedIn: 'root',
})
export class TabacoCartService {
  constructor(private tabacoService: TabacoDataService) {}

  //OBSERVABLE
  private _shopList: Tabaco[] = [];

  //OBSERVATOR
  shopList: BehaviorSubject<Tabaco[]> = new BehaviorSubject(this._shopList);

  spliceToCart(e: Tabaco) {
    let item: Tabaco | undefined = this._shopList.find(
      (v1) => v1.name == e.name && v1.type == e.type
    );
    if (typeof item != 'undefined') {
      //aqui deberia actualizar el stock del tabaco de TabacoList
      this.tabacoService.pullStock({ ...e });
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
