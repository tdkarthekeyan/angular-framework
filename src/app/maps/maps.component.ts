import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public lat: number = 28.7041;
  // tslint:disable-next-line:no-inferrable-types
  public lng: number = 77.1025;

  public origin: any;
  public destination: any;

  constructor() { }

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = { lat: 28.7041, lng: 77.1025 };
    this.destination = { lat: 13.0827, lng: 80.2707 };
  }
}
