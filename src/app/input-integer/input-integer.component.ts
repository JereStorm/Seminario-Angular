import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tabaco } from '../tabaco-list/Tabaco';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  constructor() {}

  /*PREGUNTAR POR LOS INPUT DE ENTRADA => "!:" */
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  upQuantity = (): void => {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzo el maximo disponible en este momento');
    }
  };

  downQuantity = (): void => {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  };

  changeQuantity = (e: Event): void => {
    e.preventDefault();

    if (this.quantity > this.max) {
      this.quantity = this.max;
      this.maxReached.emit('Se alcanzo el maximo disponible en este momento');
    } else if (this.quantity < 0) {
      this.quantity = 0;
    }

    this.quantityChange.emit(this.quantity);

    // Todo: verificar que no entre una letra en el input
    let quantity = (e.target as HTMLInputElement).value;
  };
}
