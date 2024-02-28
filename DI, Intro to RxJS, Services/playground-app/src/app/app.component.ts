import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'playground-app';
  constructor(public userService: UserService) {}

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
