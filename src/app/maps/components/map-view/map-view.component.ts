import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesService: PlacesService,
               private mapService: MapService ) { }

  ngAfterViewInit(): void {

    if ( !this.placesService.userLocation ) throw Error ('Detect placesService.userLocation error')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.userLocation,
      zoom: 14
      });

    const popup = new Popup()
   .setHTML(`
    <h6>I am here</h6>
    <span>I am in this place</span>
   `);

    new Marker({color: 'red'})
    .setLngLat( this.placesService.userLocation )
    .setPopup( popup )
    .addTo( map )

    this.mapService.setMap( map );


  }

  

}
