import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsListComponent,
    ThemeComponent,
    ThemesListComponent,
    HomeComponent,
    NewThemeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
