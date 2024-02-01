import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../usuario';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ControlChatService } from '../control-chat.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {
  activarMensaje(mensaje: Mensaje) {
    this.chatService.activarMensaje(mensaje).subscribe(x => {
      this.listar();
    });
  }
  bloquearMensaje(mensaje: Mensaje) {
    this.chatService.bloquearMensaje(mensaje).subscribe(x => {
      this.listar();
    });
  }
  constructor(private router: Router, private chatService: ControlChatService) {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      this.usu.nombre = usuEnSesion
      this.ds = new MatTableDataSource();
      if (usuEnSesion == "admin") {
        this.listar();
      }
    }
  }
  herramientUsuarios() {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      console.log("estpy dentro");
      if (usuEnSesion == "admin") {
        console.log("estpy tro");
        this.router.navigate(["usuarios"]);
      }
    }
  }
  listar() {
    const usuEnSesion = sessionStorage.getItem("usuario");
    if (usuEnSesion != null) {
      this.chatService.leerChat().subscribe(x => { this.ds.data = x, this.ds.paginator = this.paginator2, this.ds.sort = this.sort2 });
    }
  }
  cerrarSesion() {
    if (sessionStorage.getItem("usuario") != null) {
      sessionStorage.removeItem("usuario");
      this.router.navigate(["login"]);
    } else {
      alert("No hay ningun usuario con sesion iniciada")
    }
  }
  usu = new Usuario();
  chat: Mensaje = new Mensaje();
  listaMensajes: Mensaje[] = [];
  columnas: string[] = ["id", "usuario", "fecha", "mensaje", "activo", "Bloquear", "Activar"];
  ds!: MatTableDataSource<Mensaje>;
  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ds.filter = filterValue.trim().toLowerCase();
    if (this.ds.paginator) {
      this.ds.paginator.firstPage();
    }
  }

}
