import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabaco } from './tabaco-list/Tabaco';
import { tap } from 'rxjs';

const URL = 'https://60c280a6917002001739d1bb.mockapi.io/api/articles';

@Injectable({
  providedIn: 'root',
})
export class TabacoDataService {
  constructor(private http: HttpClient) {}

  /**
   * Devuelve un observable de Tabaco
   */
  public getAll() {
    //aqui se renderiza la api
    return this.http
      .get<Tabaco[]>(URL)
      .pipe(
        tap((tabacos: Tabaco[]) =>
          tabacos.forEach((value) => (value.quantity = 0))
        )
      );
  }
}
