import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';

@Injectable()
export class UserService implements OnDestroy {
  users: User[] = [
    { name: 'Pesho', age: 10 },
    { name: 'Ivan', age: 20 },
    { name: 'Mitko', age: 30 },
    { name: 'Petya', age: 40 },
  ];

  ngOnDestroy(): void {
    // clear terminal, detach from events
  }

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
}
