import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // изреждат се всички компоненти
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // provide-ват се самите services, които,помагат за някаква функционалност
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
