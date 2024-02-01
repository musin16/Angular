import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ControlChatService } from '../control-chat.service';
@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.component.html',
  styleUrl: './enviar-mensaje.component.css'
})
export class EnviarMensajeComponent {
  columnas: string[]=["idUsuario","nombre"];
  activarUsuario(usuario: Usuario) {
    this.service.activarUsuario(usuario).subscribe(x=>{
      this.listar2();
    });
    
  }
  bloquearUsuario(usuario: Usuario) {
    this.service.boquearUsuario(usuario).subscribe(x=>{
      this.listar2();
    });
  }
    constructor(private router:Router,private service:ControlChatService){
      const usuEnSesion = sessionStorage.getItem("usuario");
      if (usuEnSesion != null) {
        this.usu=usuEnSesion;
        this.listar2();
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
  listar2() {
    const usuEnSesion = sessionStorage.getItem("usuario");
      if (usuEnSesion != null) {
        this.service.obtenerUsuarios().subscribe(y => { this.ds.data = y,
           this.ds.paginator = this.paginator2,
            this.ds.sort = this.sort2 ,
          console.log(y)});
        
      }
  }
    usu!:string;
    listaUsuario: Usuario[] = [];
    ds: MatTableDataSource<Usuario>=new MatTableDataSource<Usuario>();
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
