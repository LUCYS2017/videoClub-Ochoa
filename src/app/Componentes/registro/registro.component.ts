import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  login = new FormControl('');
  pass = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
