

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrateComponent } from './pages/registrate/registrate.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { UserRoutingModule } from './user/user.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
