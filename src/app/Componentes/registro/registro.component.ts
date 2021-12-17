import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = new FormControl('');
  pass = new FormControl('');
  respuesta = new FormControl('');

  Registrar(){
    this.respuesta.setValue('Credenciales Correctas');
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
