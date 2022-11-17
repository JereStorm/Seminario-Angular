import { Injectable } from '@angular/core';
import { Tabaco } from './tabaco-list/Tabaco';

@Injectable({
  providedIn: 'root'
})

/**
 * MANEJA LA LOGICA DEL CARRITO
*/

export class TabacoCartService {
  
  constructor() { }

  //creo la lista de tabacos local
  shopList: Tabaco[] = [];

  //agrego al shopList el tabaco seleccionado
  addToCart(tabaco: Tabaco) {
   
    //chequeos primarios o de entrada
    if(tabaco.stock == 0){
      alert('No se puede comprar por falta de stock');
    }else if (tabaco.quantity == 0){
      alert('Debe ingresar una cantidad para el producto seleccionado');
    }else{
      this.shopList.push(tabaco);
    console.log("se agrego el siguiente tabaco ",tabaco)
    console.log(this.shopList.length);
    }

    let item: Tabaco|undefined = this.shopList.find(v1 => v1.name = tabaco.name);

    if(!item){
      
    }
  }

  getSize(): number {
    return this.shopList.length;
  }



}
