import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiendaComponent } from './tienda/tienda.component';



@NgModule({
  declarations: [HomeComponent, TiendaComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ComponentsModule,
    CarouselModule
  ]
})
export class PagesModule { }
