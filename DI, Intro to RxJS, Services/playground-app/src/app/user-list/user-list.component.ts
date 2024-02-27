import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnChanges {
  @Input('users') userListData:User[] = [];

  constructor(private cd:ChangeDetectorRef){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

  refresh(){
    this.cd.detectChanges();
  }

  // constructor(private cd: ChangeDetectorRef) {
  //   // setInterval(()=>{
  //     if(this.userListData?.length % 5  ===0){
  //       // this.cd.detectChanges();
  //       console.log('Chnages Detected!');
  //     }
      
  //   // },3000)
  // }
}
