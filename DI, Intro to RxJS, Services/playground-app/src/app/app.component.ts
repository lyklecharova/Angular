import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
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

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);
    // this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }

  // constructor(private cd: ChangeDetectorRef){
  //   setTimeout(() => {
  //     this.title = 'Changed from Detector!';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}
