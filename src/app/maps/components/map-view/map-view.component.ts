import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesService: PlacesService ) { }

  ngAfterViewInit(): void {

    if ( !this.placesService.userLocation ) throw Error ('Detect placesService.userLocation error')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.userLocation,
      zoom: 14
      });
  }

}
