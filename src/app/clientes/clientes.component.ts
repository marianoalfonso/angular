import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  cliente1:Cliente = {
    nombre: "Perez",
    direccion: "San Martin 234",
    cuit: 3422344333,
    proveedor: true
  }

  cliente2:Cliente = {
    nombre: "Ronuld",
    direccion: "Libertador 342",
    cuit: 13212334323,
    proveedor: false
  }

  cambiarNombre() {
    this.cliente2.nombre = "nuevo nombre cambiado dinamicamente";
  }

}
