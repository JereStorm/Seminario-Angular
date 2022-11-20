import { Component, OnInit } from '@angular/core';
import { TabacoCartService } from '../tabaco-cart.service';
import { Tabaco } from '../tabaco-list/Tabaco';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shopList$: Observable<Tabaco[]>;

  /**
   * Recibo el cart por DEPENDENCY INJECTION
   */
  constructor(private cart: TabacoCartService) {
    //ACA ME SUSCRIBO
    this.shopList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void {}

  getSize(): number {
    return this.cart.getSize();
  }

  getTotal(): number {
    return this.cart.getTotal();
  }

  spliceToCart(e: Tabaco): void {
    this.cart.spliceToCart(e);
  }
}
