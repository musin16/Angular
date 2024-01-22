import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class AppFrutalComponent {
  @Output() enviarMensajes = new EventEmitter();
  @Output() enviarSemilleros = new EventEmitter();

  enviaMensaje() {
    this.enviarMensajes.emit({ mensaje: 'Mensaje desde app-frutal.component.ts' });
  }

  enviarSemillero() {
    const numeroSemillero = Math.round(Math.random() * 1000);
    this.enviarSemilleros.emit({ semilleros: numeroSemillero });
  }
}