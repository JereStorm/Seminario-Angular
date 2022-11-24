import { Component, OnInit } from '@angular/core';
import { TabacoCartService } from '../services/tabaco-cart.service';
import { Tabaco } from '../tabaco-list/Tabaco';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  /**
   * DEPENDENCY INJECTION
   */
  constructor(private cart: TabacoCartService) {
    this.shopList$ = cart.shopList.asObservable();
  }

  shopList$: Observable<Tabaco[]>;

  getSize(): number {
    return this.cart.getSize();
  }

  getTotal(): number {
    return this.cart.getTotal();
  }

  ngOnInit(): void {}

  spliceToCart(e: Tabaco): void {
    this.cart.spliceToCart(e);
  }
}
