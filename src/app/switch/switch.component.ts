import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  dia:number = 5;
  // para definir una variable sin valor incial
  diax?:number;

  increment() {
    if(this.dia < 7) {
      this.dia++;
    }
  }

  decrement() {
    if(this.dia > 1) {
      this.dia--;
    }
    
  }

}
