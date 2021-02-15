import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { TiendaComponent } from './tienda/tienda.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { HomeComponent } from './home/home.component';

const Pages: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'tienda',component: TiendaComponent},
      { path: 'auth/register',component: RegistrateComponent},
      { path: 'auth/login',component: IniciarComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(Pages)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
