import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas = [
    {
      Id: 1,
      url:"../img/eljusticiero.jpg",
      Nombre: 'Rapidos y Furiosos 9'      
    },
    {
      Id: 2,
      url:"/img/eljusticiero.jpg",
      Nombre: 'En el mejor momento'  
    },
    {
      Id: 3,
      url:"/img/eljusticiero.jpg",
      Nombre: 'El Pianista'  
    },
    {
      Id: 4,
      url:"/img/eljusticiero.jpg",
      Nombre: 'La Viuda'  
    },
    {
      Id: 5,
      url:"/img/eljusticiero.jpg",
      Nombre: 'Venganza'  
    },
    {
      Id: 6,
      url:"/img/eljusticiero.jpg",
      Nombre: 'El Justiciero'  
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
