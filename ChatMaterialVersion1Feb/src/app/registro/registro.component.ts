import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { ControlChatService } from '../control-chat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario=new Usuario();

  constructor(private router:Router, private service:ControlChatService){
    
  }
  registrarse() {
  if(this.usuario.email!=null && this.usuario.pwd!=null && this.usuario.nombre!=null){
    this.service.insertarUsuario(this.usuario).subscribe();
    this.router.navigate(["login"]);
  }else{
    alert("Todos los campos son obligatorios");
  }
  
}

}
