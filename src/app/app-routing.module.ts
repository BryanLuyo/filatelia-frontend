

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
      path:"",
      component:HomeComponent
    },
    {
      path: "tienda",
      component:TiendaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
