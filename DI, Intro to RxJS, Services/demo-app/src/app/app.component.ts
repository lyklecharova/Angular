import { Component, Input } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';

  users: User[] = [
    { name: 'Ivan', age: 12 },
    { name: 'Mitko', age: 2 },
    { name: 'Pesho', age: 35 },
    { name: 'Petya', age: 28 },
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);

    inputName.value = '';
    inputAge.value = '';
  }
}
