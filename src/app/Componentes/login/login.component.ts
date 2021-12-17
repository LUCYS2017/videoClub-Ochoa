import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  

  user = new FormControl('');
  pass = new FormControl('');
  respuesta = new FormControl('');

  Entrar(){
    this.respuesta.setValue('Credenciales Correctas');
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}
