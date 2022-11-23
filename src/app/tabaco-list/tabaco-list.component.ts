/**
 * Components Globals
 */
import { Component, OnInit } from '@angular/core';
/**
 * Services
 */
import { TabacoCartService } from '../services/tabaco-cart.service';
import { TabacoDataService } from '../services/tabaco-data.service';
/**
 * Interfaces
 */
import { Tabaco } from './Tabaco';

@Component({
  selector: 'app-tabaco-list',
  templateUrl: './tabaco-list.component.html',
  styleUrls: ['./tabaco-list.component.scss'],
})
export class TabacoListComponent implements OnInit {
  tabacos: Tabaco[] = [];

  constructor(
    private cart: TabacoCartService,
    private tabacoService: TabacoDataService
  ) {}

  /**
   * HOOK(ngOnInit()) de inicio del componenete;
   * contraparte: onDestroy() => para desubscribirme
   * o usar el pipe de angular
   */
  ngOnInit(): void {
    this.tabacoService
      .getAll()
      .subscribe((tabacosProm) => (this.tabacos = tabacosProm));
  }
  // Funciones de salida => "()"
  maxReached(m: string) {
    alert(m);
  }
  pullStock(e: Tabaco) {
    // let item: Tabaco | undefined = this.tabacos.find(
    //   (v1) => (v1.name = e.name)
    // );
    // if (typeof item != 'undefined') {
    //   this.tabacos = this.tabacos.filter((v1) => v1.name != e.name);
    //   this.tabacos.push(e);
    // }
  }

  addToCart(tabaco: Tabaco): void {
    //chequeos primarios o de entrada
    if (tabaco.stock == 0 || tabaco.stock - tabaco.quantity < 0) {
      alert('No se puede comprar por falta de stock');
    } else if (tabaco.quantity == 0) {
      alert('Debe ingresar una cantidad para el producto seleccionado');
    } else {
      this.cart.addToCart(tabaco);
      tabaco.stock -= tabaco.quantity;
      tabaco.quantity = 0;
    }
  }
}
