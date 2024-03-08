import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wellcome-msg',
  templateUrl: './wellcome-msg.component.html',
  styleUrls: ['./wellcome-msg.component.css'],
})
export class WellcomeMsgComponent {
  @Input('isLoggedIn') isLoggedIn = false;
}
