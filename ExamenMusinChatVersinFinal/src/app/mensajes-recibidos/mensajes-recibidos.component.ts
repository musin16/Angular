import { Component, ViewChild } from '@angular/core';
import { MensajePrivado } from '../mensaje-privado';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ControlChatService } from '../control-chat.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mensajes-recibidos',
  templateUrl: './mensajes-recibidos.component.html',
  styleUrl: './mensajes-recibidos.component.css'
})
export class MensajesRecibidosComponent {
  columnas: string[] = ["id", "usuario","destinatario" ,"fecha", "mensaje", "activo"];
  listaMensajes: MensajePrivado[] = [];
  ds!: MatTableDataSource<MensajePrivado>;
  ds2!: MatTableDataSource<MensajePrivado>;
  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;

  @ViewChild(MatPaginator) paginator3!: MatPaginator;
  @ViewChild(MatSort) sort3!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ds.filter = filterValue.trim().toLowerCase();
    if (this.ds.paginator) {
      this.ds.paginator.firstPage();
    }
  }
  constructor(private router: Router, private chatService: ControlChatService) {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      this.ds = new MatTableDataSource();
      this.ds2=new MatTableDataSource();
      this.listar();
      this.listarMensajesEnviados();
    }
  }
  listar() {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      if(usuEnSesion!="admin"){
        this.chatService.obtenerHistorialChat(usuEnSesion).subscribe(x => { this.ds.data = x, this.ds.paginator = this.paginator2, this.ds.sort = this.sort2 });
      }
    }
  }
  listarMensajesEnviados() {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      if(usuEnSesion!="admin"){
        this.chatService.obtenerHistorialEnviados(usuEnSesion).subscribe(x => { this.ds2.data = x, this.ds.paginator = this.paginator3, this.ds.sort = this.sort3});
      }
    }
  }
}
