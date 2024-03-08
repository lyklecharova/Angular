import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellcomeMsgComponent } from './wellcome-msg/wellcome-msg.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WellcomeMsgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WellcomeMsgComponent]
})
export class SharedModule { }
