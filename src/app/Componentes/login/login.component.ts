import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  

  emailCtrl = new FormControl('', [Validators.required,  Validators.email]);
  passCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  
  constructor() { }

  ngOnInit(): void {
  }

  getEmail(event: Event){
    event.preventDefault();   
   console.log(this.emailCtrl.value); 
   console.log(this.passCtrl.value);
  }

  
}
