import { Injectable } from '@angular/core';
import { Tabaco } from './tabaco-list/Tabaco';

@Injectable({
  providedIn: 'root'
})

export class TabacoCartService {

  addToCart(tabaco: Tabaco) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
