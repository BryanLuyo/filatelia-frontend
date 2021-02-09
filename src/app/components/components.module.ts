import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MancolistaComponent } from './mancolista/mancolista.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MancolistaComponent],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    MancolistaComponent
  ],

})
export class ComponentsModule { }
