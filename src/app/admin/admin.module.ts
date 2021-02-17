import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentModule } from './components/admin-component.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [CommonModule, AdminComponentModule,RouterModule],
})
export class AdminModule {}
