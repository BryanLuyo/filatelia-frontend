import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfiguracionCatalogoComponent } from './anio-catalogo/configuracion-catalogo.component';



@NgModule({
  declarations: [HeaderAdminComponent, SidebarComponent, ConfiguracionCatalogoComponent],
  imports: [
    CommonModule,
  ],
  exports : [
    HeaderAdminComponent, SidebarComponent, ConfiguracionCatalogoComponent
  ]
})
export class AdminComponentModule { }
