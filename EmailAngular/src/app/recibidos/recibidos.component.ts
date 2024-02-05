import { Component } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrl: './recibidos.component.css'
})
export class RecibidosComponent {
  listaMensajes:Email[]=[];
  constructor(private service:EmailService){
    this.listar();
    this.insertar();
  }
  email=new Email();
  insertar() {
    this.service.insertar(this.email).subscribe();
  }
  user="hamza ";
  listar() {
    this.service.obtenerMensajesRecibidos(this.user).subscribe(recibidos =>this.listaMensajes=recibidos);
    console.log(this.listaMensajes)
  }
}
