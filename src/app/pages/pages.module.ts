import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbAccordionModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';


// component de page
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { IniciarComponent } from './iniciar/iniciar.component';

@NgModule({
  declarations: [HomeComponent, TiendaComponent, RegistrateComponent, IniciarComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ComponentsModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule
  ]
})
export class PagesModule { }


