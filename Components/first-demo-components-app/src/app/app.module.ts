import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavigationComponent } from './navigation/navigation.components';

@NgModule({
  // изреждат се всички компоненти
  declarations: [
    AppComponent,
    NavComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  // provide-ват се самите services, които,помагат за някаква функционалност
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { } 
