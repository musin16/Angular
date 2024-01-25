import { Component, Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrl: './huerto.component.css',
})
export class HuertoComponent {
actualizarMensajeFrutal(event:any) {
  this.mensajeDeFrutal=event;
}

  mensajeDeHortaliza: string="";
  peticionesSemilla: number=0;
  mensajeHuertoFrutal: string="";
  mensajeDeFrutal: string="";
  nplatonesEnviados: number=0;
  actualizaMensajeDeHortaliza(event: any) {
    this.mensajeDeHortaliza = event;
  }

  actualizarNumeroSemilleros(event: any) {
    this.peticionesSemilla = event;
  }
  actualizarNumeroPlatones(event: any) {
    this.nplatonesEnviados=event;
  }
  mensajeParaHortaliza: string = '';
}
