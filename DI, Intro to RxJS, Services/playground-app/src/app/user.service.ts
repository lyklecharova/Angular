import { Injectable, OnDestroy } from '@angular/core';
import { JsonPlaceHolderUser, User } from './types/user';

@Injectable()
export class UserService implements OnDestroy {
  URL = 'https://jsonplaceholder.typicode.com/users';
  users: JsonPlaceHolderUser[] = [];

  ngOnDestroy(): void {
    // clear terminal, detach from events
  }

  getUsers(){
    return fetch(this.URL).then(res => res.json());
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    // this.users.push(user);
    // this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }
}
