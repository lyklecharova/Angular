import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { JsonPlaceHolderUser, User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'playground-app';
  appUsers: JsonPlaceHolderUser[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users
  };

  ngOnInit(): void {
    this.userService.getUsers().then(users =>{
    console.log('users data', users);
    this.appUsers = users;
    });
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // Validation of inputs, Transformation of the inputs
    this.userService.addUser(inputName, inputAge);
    // Additional functionality
  }

  // constructor(private cd: ChangeDetectorRef){
  //   setTimeout(() => {
  //     this.title = 'Changed from Detector!';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}
