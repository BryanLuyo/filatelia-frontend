import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MancolistaComponent } from './mancolista/mancolista.component';
import { RouterModule } from '@angular/router';
import { SubastaComponent } from './subasta/subasta.component';
import { TiendauserComponent } from './tiendauser/tiendauser.component';



@NgModule({
  declarations: [
     ConfiguracionComponent,
     MancolistaComponent,
     SubastaComponent,
     TiendauserComponent
  ],
  exports : [
    ConfiguracionComponent,
    MancolistaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserComponentsModule { }
