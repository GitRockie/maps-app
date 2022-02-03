import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  public userLocation?: [ number, number];
  //public isLoading;

  get isUserLocationReady ():boolean {
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
   }

 //When we have geolocation
 public async getUserLocation(): Promise<[number, number]> {

  return new Promise ( (resolve, reject) => {

    navigator.geolocation.getCurrentPosition(
      ( { coords } ) => { 
        this.userLocation = [ coords.longitude, coords.latitude ];
        resolve ( this.userLocation );
      },
      ( err ) => {
        alert('Geolocation abcent');
        console.log(err);
        reject();
      }
    );


  }); 

 }




}
