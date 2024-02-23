import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-demo-app';
  colorValueForPlayground = 'blue';

  onOutputFromChild (inputValue:string){
    console.log('from parent:', inputValue);
  }
}
