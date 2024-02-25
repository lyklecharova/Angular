import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() users: User[] = [];

  // cd -> change detection
  // ChangeDetectorRef ->  ръчно актуализира визуалният интерфейс на компонента, когато има промени
  constructor(private cd: ChangeDetectorRef){}

  // ngOnChanges "хваща" (или реагира на) всички промени на входящите параметри, които са свързани с компонентата.
  ngOnChanges() {
    console.log('invoked from ngOnChanges');
  }

  // refresh(){
  //   this.cd.detectChanges();
  // }
}
