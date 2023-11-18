import { Component } from '@angular/core';
import { Persona } from '../persona';
import { Curso } from '../curso';
import { Numero } from '../numero';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  nombre:string = 'Mariano Alfonso';
  persona:Persona = {
    nombre: 'Mariano Alfonso',
    edad: 51,
    funcion: 'developer'
  };
  
  curso:Curso = {
    titulo: 'Angular',
    duracion: 120,
    examen: true
  }

  Numero = {
    digito: 0,
  };

  decrement() {
    this.Numero.digito--;
  }

  increment() {
    this.Numero.digito++;
  }

}
