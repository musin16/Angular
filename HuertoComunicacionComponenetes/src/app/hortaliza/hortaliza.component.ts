import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrl: './hortaliza.component.css'
})
export class HortalizaComponent {
  enviarPlatones() {
    this.numeroSemillero = Math.round(Math.random() * 1000);
    this.nsemilleros.emit(this.numeroSemillero);
  }
  mensajeParaHuerto: string = "";
  numeroSemillero: number = 0;
  @Input()   mensajeDeEntradaHortaliza: string = '';
  @Output() mensajeDeSalidaHortaliza = new EventEmitter<string>();
  @Output() nsemilleros = new EventEmitter<number>();
  enviaMensaje() {
    this.mensajeDeSalidaHortaliza.emit(this.mensajeParaHuerto);
  }

}
