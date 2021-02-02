import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    margin:5,
    responsive:{
      0:{
          items:1,
      }
    }
  }

  constructor() { }

  ngOnInit(): void {



  }

}
