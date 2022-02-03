import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


//Verificamos si el Usuario tiene accesso a la geolocalización
if ( !navigator.geolocation ) {
  alert('Your browser has no Geolocation support');
  throw new Error('Your browser has no Geolocation support');
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
