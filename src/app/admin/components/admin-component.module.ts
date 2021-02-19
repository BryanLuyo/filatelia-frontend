import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfiguracionCatalogoComponent } from './anio-catalogo/configuracion-catalogo.component';
import { PaisCatalogoComponent } from './pais-catalogo/pais-catalogo.component';
import { TemasCatalogoComponent } from './temas-catalogo/temas-catalogo.component';



@NgModule({
  declarations: [HeaderAdminComponent, SidebarComponent, ConfiguracionCatalogoComponent, PaisCatalogoComponent, TemasCatalogoComponent],
  imports: [
    CommonModule,
  ],
  exports : [
    HeaderAdminComponent, SidebarComponent, ConfiguracionCatalogoComponent
  ]
})
export class AdminComponentModule { }
