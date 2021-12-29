import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  cant:number=0;
  Comprass=[{
    nombre:"",
    precio:0
}];
 
  addCar(event: any) {
    this.cant= this.cant+1;   
    this.Comprass=event;
  }
 
  peliculas = [
    {
      Id: 1,
      url:"assets/img/el-justiciero-2.jpg",
      Nombre: "El Justiciero 2",
      Protagonistas:["Denzel Washington","Pedro Pascal","Ashton Sanders"],
      Anno:"2018"     
    },
    {
      Id: 2,
      url:"assets/img/venom.jpg",
      Nombre: "Venóm",
      Protagonistas:["Tom Hardy","Michelle Williams","Riz Ahmed"],
      Anno:"2018" 
    },
    {
      Id: 3,
      url:"assets/img/alerta_roja.jpg",
      Nombre: 'Alerta Roja',  
      Protagonistas:["Dwayne Johnson","Ryan Reynolds","Gal Gadot"] ,
      Anno:"2021"
    },
    {
      Id: 4,
      url:"assets/img/rapido-furioso.jpg",
      Nombre: 'Rápidos y furiosos',
      Protagonistas:["Dwayne Johnson","Jason Statham","Idris Elba"] ,
      Anno:"2019"
    },
    {
      Id: 5,
      url:"assets/img/el-protector.jpg",
      Nombre: 'El Protector',
      Protagonistas:["Liam Neeson","Katheryn Winnick","Juan Pablo Raba"] ,
      Anno:"2021"  
    },
    {
      Id: 6,
      url:"assets/img/mision-de-rescate.jpg",
      Nombre: 'Misión de Rescate',
      Protagonistas:["Chris Hemsworth","Rudhraksh Jaiswal","Randeep Hooda"] ,
      Anno:"2020"  
    },
    {
      Id: 7,
      url:"assets/img/un-espia-y-medio.jpg",
      Nombre: 'Un espia y medio',
      Protagonistas:["Kevin Hart","Dwayne Johnson","Amy Ryan"] ,
      Anno:"2016"  
    },
    {
      Id: 8,
      url:"assets/img/el-precio-del-manana.jpg",
      Nombre: 'El precio del mañana',
      Protagonistas:["Amanda Seyfried","Justin Timberlake","Cillian Murphy"] ,
      Anno:"2011"  
    },
    {
      Id: 9,
      url:"assets/img/spider-man.jpg",
      Nombre: 'Spider-Man',
      Protagonistas:["Tom Holland","Michael Keaton","Robert Downey Jr."] ,
      Anno:"2017"  
    },
    {
      Id: 10,
      url:"assets/img/la-serpiente-verde.jpg",
      Nombre: 'La serpiente verde',
      Protagonistas:["Tang Xiaoxi","Zhang Fuzheng","Wei Chao"] ,
      Anno:"2021"  
    }
  ]

  constructor() { 
   
  }
  ngOnInit(): void {
   this.cant=0;
  }

  
}
