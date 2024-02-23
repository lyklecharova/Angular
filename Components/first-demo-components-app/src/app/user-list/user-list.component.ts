import { Component } from '@angular/core';

type User = {
  name: String,
  age: number,
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

export class UserListComponent {
  users = [
    {name: 'Pesho',age: 18},
    {name: 'Mitko',age: 22},
    {name: 'Petya',age: 38},
  ] as User[];
}
