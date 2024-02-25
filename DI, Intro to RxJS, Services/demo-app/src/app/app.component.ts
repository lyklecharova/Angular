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

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'DemoName',
        age: 0,
      });
      console.log('User has been added!');
    }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    // презаписва стойността на променливата this.users
    // създава нов масив, който съдържа всички елементи от this.users,
    // след което добавя новия потребител user към края на този нов масив.
    this.users = [...this.users, user];

    // this.users.push(user);

    inputName.value = '';
    inputAge.value = '';
  }
}
