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
  shopList$: Observable<Tabaco[]>;
  size: number = 0;

  /**
   * DEPENDENCY INJECTION
   */
  constructor(private cart: TabacoCartService) {
    this.shopList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void {}

  getSize(): number {
    return this.cart.getSize();
  }

  private setSize(): void {
    this.size = this.getSize();
  }

  getTotal(): number {
    return this.cart.getTotal();
  }

  spliceToCart(e: Tabaco): void {
    this.cart.spliceToCart(e);
  }
}
