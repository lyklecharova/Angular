import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NwThemeComponent } from './nw-theme/nw-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';



@NgModule({
  declarations: [
    NwThemeComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
