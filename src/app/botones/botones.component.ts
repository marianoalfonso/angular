import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  src:string = '';
  width:number = 0;

  src1:string = 'https://images.pexels.com/photos/243989/pexels-photo-243989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  src1Width:number = 280;
  src1Height:number = 400;

  src2:string = 'https://images.pexels.com/photos/18853071/pexels-photo-18853071/free-photo-of-reina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  src2Width:number = 360;
  src2Height:number = 400;

}
