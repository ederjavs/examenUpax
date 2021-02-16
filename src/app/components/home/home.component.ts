import { Component, OnInit } from '@angular/core';
//import { CarouselConfig } from 'ng-carousel-cdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*config: CarouselConfig = {
    autoplayEnabled: true,
    items: [
      { name: 'https://picsum.photos/id/237/300/200' },
      { name: 'https://picsum.photos/id/238/300/200' },
      { name: 'https://picsum.photos/id/239/300/200' },
      { name: 'https://picsum.photos/id/240/300/200' },
      { name: 'https://picsum.photos/id/250/300/200' },
      { name: 'https://picsum.photos/id/251/300/200' }
    ]
  };*/
  public imagesUrl: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.imagesUrl = [
      'https://picsum.photos/id/238/400/300',
      'https://picsum.photos/id/239/400/300',
      'https://picsum.photos/id/240/400/300',
      'https://picsum.photos/id/241/400/300',
      'https://picsum.photos/id/242/400/300',
      'https://picsum.photos/id/243/400/300'
    ];
  }
}
