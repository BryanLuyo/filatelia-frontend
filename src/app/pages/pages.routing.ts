import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PagesComponent } from './pages.component';
import { TiendaComponent } from './tienda/tienda.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoInternoComponent } from './catalogo-interno/catalogo-interno.component';

const Pages: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
 
      //pages 

      { path: '', component: HomeComponent },
      { path: 'tienda',component: TiendaComponent},
      { path: 'catalogo', component:CatalogoComponent},
      { path: 'catalogo-interna', component:CatalogoInternoComponent},

      //auth
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
