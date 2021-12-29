import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() cantidad=0;
  @Input() Compras=[{
      nombre:"",
      precio:0
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

}


