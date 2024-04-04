import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WellcomeMsgComponent } from './wellcome-msg/wellcome-msg.component';

@NgModule({
  declarations: [WellcomeMsgComponent],
  imports: [CommonModule, RouterModule],
  exports: [ WellcomeMsgComponent],
})
export class SharedModule {}