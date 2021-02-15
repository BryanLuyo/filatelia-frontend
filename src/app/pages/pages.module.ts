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
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoInternoComponent } from './catalogo-interno/catalogo-interno.component';

@NgModule({
  declarations: [HomeComponent, TiendaComponent, RegistrateComponent, IniciarComponent, PagesComponent, CatalogoComponent, CatalogoInternoComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    ComponentsModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule
  ]
})
export class PagesModule { }


