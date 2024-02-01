import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ControlChatService } from '../control-chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private service:ControlChatService,private router:Router){

  }
  iniciarSesion() {
    this.service.obtenerUsuario(this.usuario).subscribe((x: any) => {
      if (x!=null) {
        alert("Si esta registrado");
        if(x[0].email=="admin@gmail.com"){
          sessionStorage.setItem('usuario', x[0].nombre);
          this.router.navigate(["gestion",x[0].nombre]);
        }else{
          sessionStorage.setItem('usuario', x[0].nombre);
          this.router.navigate(["chat",x[0].nombre]);
        }
      } else {
        alert("No esta registrado");
      }
    });
  }
  

  usuario=new Usuario();

}