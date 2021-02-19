import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ConfiguracionCatalogoComponent } from './components/anio-catalogo/configuracion-catalogo.component';
import { PaisCatalogoComponent } from './components/pais-catalogo/pais-catalogo.component';
import { TemasCatalogoComponent } from './components/temas-catalogo/temas-catalogo.component';
const AdminRouting: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardAdminComponent,
    children: [
      { path: '', component: ConfiguracionCatalogoComponent },
      { path: 'pais', component: PaisCatalogoComponent },
      { path: 'temas', component: TemasCatalogoComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminRouting)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
