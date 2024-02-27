import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'playground-app';
  users: User[] = [
    { name: 'Pesho', age: 10 },
    { name: 'Ivan', age: 20 },
    { name: 'Mitko', age: 30 },
    { name: 'Petya', age: 40 },
  ];

  constructor() {
    setTimeout(() => {
      this.title = 'Changed from Angular!';
    }, 3000);
  }

  // constructor(private cd: ChangeDetectorRef){
  //   setTimeout(() => {
  //     this.title = 'Changed from Detector!';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}
