import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserItemComponent],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
