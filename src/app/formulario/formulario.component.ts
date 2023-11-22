import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

openAlert:boolean = false;

mostrarEnConsola(nombre:string, telefono:string) { 
  alert(`hola ${nombre}, bienvenido al mundo de Angular, te estaremos contactando al telefono ${telefono}`)
  this.openAlert = true;
}

}
