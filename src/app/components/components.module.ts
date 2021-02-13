import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MancolistaComponent } from './mancolista/mancolista.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MancolistaComponent, ConfiguracionComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    MancolistaComponent,
    ConfiguracionComponent
  ],

})
export class ComponentsModule { }
