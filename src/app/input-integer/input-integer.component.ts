import { Component, OnInit, Input } from '@angular/core';
import { Tabaco } from '../tabaco-list/Tabaco';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})


export class InputIntegerComponent implements OnInit {

  constructor() {
  }

  /*PREGUNTAR HACER DE LOS INPUT DE ENTRADA */
  @Input() 
  quantity!: number;

  @Input() 
  max!: number;

  ngOnInit(): void {
  }

  upQuantity = ():void => {
    if(this.quantity < this.max)
    this.quantity++
  }

  downQuantity = ():void => {
    if(this.quantity > 0){
      this.quantity--
    }
  }
  
  changeQuantity = (e : Event):void => {
    e.preventDefault();
    
    if(this.quantity > this.max){
      this.quantity = this.max;
    }else if(this.quantity < 0){
      this.quantity = 0;
    }
    // Todo: verificar que no entre una letra en el input
   let quantity = (e.target as HTMLInputElement).value;
   
  }
}
  

  // changeQuantity = (e, item: Tabaco):void => {
  //    console.log(e)
  //    if(e.target.value > item.stock){
  //     e.preventDefault()
  //    }
  // }




