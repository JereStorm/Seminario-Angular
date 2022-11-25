import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabaco } from '../tabaco-list/Tabaco';
import { BehaviorSubject, tap } from 'rxjs';

const URL = 'https://60c280a6917002001739d1bb.mockapi.io/api/articles';

@Injectable({
  providedIn: 'root',
})
export class TabacoDataService {
  constructor(private http: HttpClient) {}

  //OBSERVABLE
  private _shopList: Tabaco[] = [];

  //OBSERVATOR
  shopList: BehaviorSubject<Tabaco[]> = new BehaviorSubject(this._shopList);

  /**
   * Devuelve un observable de Tabaco
   */

  /*
  public getAll() {
    //aqui se renderiza la api
    return this.http.get<Tabaco[]>(URL).pipe(
      tap((tabacos: Tabaco[]) => {
        return tabacos.forEach((value) => (value.quantity = 0));
      })
    );
  }*/
  public pullStock(e: Tabaco) {
    let item = this._shopList.find((v1) => {
      return v1.name == e.name && v1.type == e.type;
    });

    if (typeof item != 'undefined') item.stock = e.stock;
  }

  public getAll() {
    this.http.get<Tabaco[]>(URL).forEach((tabacoList) => {
      return tabacoList.forEach((v1) => {
        v1.quantity = 0;
        this._shopList.push(v1);
      });
    });
    this.shopList.next(this._shopList);
  }
}
