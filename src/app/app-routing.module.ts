import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ListadoComponent } from './Componentes/listado/listado.component';

const routes: Routes = [
  { path:'registroUsuario', component: RegistroComponent },
  { path:'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path:'listado', component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
