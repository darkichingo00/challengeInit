import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment.prod';

if (environment.production) {
  console.log('Estamos en producción');
} else {
  console.log('Estamos en desarrollo');
}

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
  .catch((err) => console.error(err));
