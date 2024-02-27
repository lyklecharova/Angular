import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
 // .bootstrapModule(AppModule, {ngZone: 'noop'}) // изключва Ангулар, целият App module  е изключен от changeDetection loop
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));


