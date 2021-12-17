import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './Componentes/listado/listado.component';
import { InfoComponent } from './Componentes/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,   
    ListadoComponent,
    InfoComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
