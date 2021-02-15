import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { MancolistaComponent } from './components/mancolista/mancolista.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { SubastaComponent } from './components/subasta/subasta.component';
import { TiendauserComponent } from './components/tiendauser/tiendauser.component';

const routes: Routes = [
  {
    path: 'user/dashboard',
    component: DashboardUserComponent,
    children: [
        { path: '', component: SubastaComponent },
        { path: 'subasta', component: SubastaComponent },
        { path: 'configuracion', component: ConfiguracionComponent },
        { path: 'mancolista', component: MancolistaComponent },
        { path: 'tienda', component: TiendauserComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}
