import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Tabaco } from './tabaco-list/Tabaco';

@Injectable({
  providedIn: 'root',
})
export class TabacoDataService {
  constructor(private http: HttpClientModule) {}

  getAll() {
    //aqui se renderiza la api
  }
}
