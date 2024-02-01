import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ControlChatService } from '../control-chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  usu!: string;
  cerrarSesion() {
    if (sessionStorage.getItem("usuario") != null) {
      sessionStorage.removeItem("usuario");
      this.router.navigate(["login"]);
    } else {
      alert("No hay ningun usuario con sesion iniciada")
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ds.filter = filterValue.trim().toLowerCase();
    if (this.ds.paginator) {
      this.ds.paginator.firstPage();
    }
  }
  chat: Mensaje = new Mensaje();
  listaMensajes: Mensaje[] = [];
  columnas: string[] = ["id", "usuario", "fecha", "mensaje", "activo"];
  ds!: MatTableDataSource<Mensaje>;
  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;

  insertarMensaje() {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      this.chat.usuario = usuEnSesion;
      this.chatService.insertarMensaje(this.chat).subscribe();

    }
  }

  constructor(private router: Router, private chatService: ControlChatService) {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      this.usu = usuEnSesion
      this.ds = new MatTableDataSource();
      this.listar();
    }
  }
  listar() {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      if(usuEnSesion!="admin"){
        this.chatService.leerChatActivo().subscribe(x => { this.ds.data = x, this.ds.paginator = this.paginator2, this.ds.sort = this.sort2 });
      }
     
    }
  }

}