import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

const IMG_URL =  'https://mytanklife.com/wp-content/uploads/2022/09/Siamese-Fighter-Female-removebg-preview-600x600.png';
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';
  @Output() onTestOutput = new EventEmitter<string>();

  isToggle = false;
  greenBackround = 'background-green';
  imgUrl = IMG_URL;

  ngOnInit(){
    console.log('Component Created!');
  }

  ngAfterViewInit(){
    console.log('After Init');
  }

  ngOnDestroy(){
    // clean up of stuff!!!
    // Delete
    console.log('On Destroy');
  }

  ngDoCheck () {
    if(this.isToggle === true){
      console.log({isToggle: this.isToggle});
    }
   
  }

  handleClick() {
    console.log('clicked');
    this.isToggle = !this.isToggle;
  }

  handleInput(usernameValue:string){
    console.log('username: ', usernameValue);
    console.log(this.colorValue);

    this.onTestOutput.emit(usernameValue);
    
  }
}
