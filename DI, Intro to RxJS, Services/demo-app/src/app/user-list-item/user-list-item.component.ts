import { Component, Input } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
            // user-a има шанс да го има, но може и да го няма
  @Input() user: User | undefined = undefined;
}
