import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<div id="nav-wrapper">Hello, navigation</div>
    <div>{{ titleVar }}</div> `,
  styles: ['#nav-wrapper:{backround-color:pink}'],
})
export class NavComponent {
  titleVar = 'Hello, Angular';
}
