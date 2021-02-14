import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// component de page
import { DashboardUserComponent } from '../user/dashboard-user/dashboard-user.component';
import { UserComponentsModule } from './components/user-components.module';



@NgModule({
  declarations: [DashboardUserComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ComponentsModule,
    UserComponentsModule
  ]
})
export class UserModule { }


