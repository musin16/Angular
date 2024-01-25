import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrl: './frutal.component.css'
})
export class FrutalComponent {
enviaMensajeFrutal() {
  this.mensajeDeSalidaFrutalHuerto.emit(this.mensajeFruta);
}
  @Input() mensajeDeEntradaFruta!:string;
  @Output() nplatones= new EventEmitter<number>();
  @Output() mensajeDeSalidaFrutalHuerto= new EventEmitter<string>();
  numeroPlatones:number=0;
  mensajeFrutalParaHuerto!: string;
mensajeFruta: string="";
  enviarPlatones() {
    this.numeroPlatones = Math.round(Math.random() * 1000);
    this.nplatones.emit(this.numeroPlatones);
  }

}
