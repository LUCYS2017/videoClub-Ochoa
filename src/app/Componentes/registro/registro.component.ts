import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validations } from '../../utils/validations';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required,  Validators.email]);
  passCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passConfirmCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  
 

  constructor() { }

  ngOnInit(): void {
  }

}
