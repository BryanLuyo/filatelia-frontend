import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MancolistaComponent } from './mancolista/mancolista.component';



@NgModule({
  declarations: [
     ConfiguracionComponent,
     MancolistaComponent
  ],
  exports : [
    ConfiguracionComponent,
    MancolistaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserComponentsModule { }
