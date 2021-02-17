import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ConfiguracionCatalogoComponent } from './components/configuracion-catalogo/configuracion-catalogo.component';
const AdminRouting: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardAdminComponent,
    children: [
      { path: '', component: ConfiguracionCatalogoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminRouting)],
exports: [RouterModule],
})
export class AdminRoutingModule {}
