

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrateComponent } from './pages/registrate/registrate.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { DashboardUserComponent } from './pages/dashboard-user/dashboard-user.component';

const routes: Routes = [
    {
      path:"",
      component:HomeComponent
    },
    {
      path: "tienda",
      component:TiendaComponent
    },
    {
      path: "auth/register",
      component:RegistrateComponent
    },
    {
      path: "auth/login",
      component:IniciarComponent
    },
    {
      path: "dashboard-user",
      component:DashboardUserComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
