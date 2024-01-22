import { Component } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css']
})
export class AppHuertoComponent {
  mensajeParaHortaliza: string = '';
  mensajeDeHortaliza: string = '';
  peticionesSemilla: number = 0;

  actualizaMensajeDeHortaliza(event: any) {
    this.mensajeDeHortaliza = event.mensaje;
  }

  actualizarNumeroSemilleros(event: any) {
    this.peticionesSemilla = event.semilleros;
  }
}
