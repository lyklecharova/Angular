import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavigationComponent } from './navigation/navigation.components';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  // изреждат се всички компоненти
  declarations: [
    AppComponent,
    NavComponent,
    NavigationComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  // provide-ват се самите services, които,помагат за някаква функционалност
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { } 
