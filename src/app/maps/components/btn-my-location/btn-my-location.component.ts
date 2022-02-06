import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor( private mapService: MapService,
               private placesService: PlacesService ) { }


  goToMyLocation() {

    if( !this.placesService.isUserLocationReady ) throw Error('User needs to be localized');
    if( !this.mapService.isMapReady ) throw Error('The map needs to be inicialized');
    
    this.mapService.flyTo( this.placesService.userLocation! )

  }

}
