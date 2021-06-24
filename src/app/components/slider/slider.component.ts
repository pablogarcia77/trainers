import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public slides!: Array<any>;

  constructor() {
    this.slides = [
      {
        "image": "assets/images/futbol.jpg"
      },
      {
        "image": "assets/images/futbol.jpg"
      }
    ]
  }

  ngOnInit(): void {
  }

}
