import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class AppHortalizaComponent {
  @Input() mensajeDeEntradaHortaliza: string = '';
  @Output() mensajeDeSalidaHortaliza = new EventEmitter();
  mensajeParaHuerto: string = '';
  numeroSemillero: number = 0;

  enviaMensaje() {
    this.mensajeDeSalidaHortaliza.emit({ mensaje: this.mensajeParaHuerto });
  }

  enviarPlantones() {
    this.numeroSemillero = Math.round(Math.random() * 1000);
    this.mensajeDeSalidaHortaliza.emit({ semilleros: this.numeroSemillero });
  }
}