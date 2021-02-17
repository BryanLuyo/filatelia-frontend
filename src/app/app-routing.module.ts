
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user/user.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { AdminRoutingModule } from './admin/admin.routing';

const routes: Routes = [];

@NgModule({
  imports: [
  
  RouterModule.forRoot(routes),
    UserRoutingModule,
    PagesRoutingModule,
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
