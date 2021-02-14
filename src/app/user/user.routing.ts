import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { MancolistaComponent } from './components/mancolista/mancolista.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardUserComponent,
    children: [
        { path: '', component: DashboardUserComponent },
        { path: 'configuracion', component: ConfiguracionComponent },
        { path: 'mancolista', component: MancolistaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}
