import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent {
  isToggle = false;
  greenBackround = 'background-green';
  imgUrl =
    'https://mytanklife.com/wp-content/uploads/2022/09/Siamese-Fighter-Female-removebg-preview-600x600.png';
  handleClick() {
    console.log('clicked');
    this.isToggle = !this.isToggle;
  }

  handleInput(usernameValue:string){
    console.log('username: ', usernameValue);
    
  }
}
