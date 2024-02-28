import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Observables
// sync analogy
[1, 2, 3, 4].map((x) => x * 2);

// async example

// const o = new Observable((observer) => {
//   observer.next(200);
//   observer.next(210);
// });

// o.subscribe((data) => {
//   console.log('from observervable form:', data);
// });

const interval = (intervalValue: number) => {
  const o = new Observable<number>((observer) => {
    let counter = 0;

    const timer = setInterval(() => {
      observer.next(counter++);
    }, intervalValue);

    // clear data on destroy
    return () => {
      clearInterval(timer);
    };
  });

  return o;
};

interval(2000).subscribe((data) => {
  console.log('data from interval', data);
});
