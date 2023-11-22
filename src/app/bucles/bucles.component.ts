import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

personas:Persona[] = [
  { nombre: "Adriana", edad: 47 },
  { nombre: "Martina", edad: 34 },
  { nombre: "Analia", edad: 56 },
];

}

