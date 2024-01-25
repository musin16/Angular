import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Chat2Service } from '../chat2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service:Chat2Service,private router:Router){

  }
  iniciarSesion() {
    this.service.obtenerUsuario(this.usuario).subscribe();
    this.router.navigate(['chat/'+this.usuario.nombre]);
    sessionStorage.setItem('usuario',this.usuario.nombre);
  }

  usuario=new Usuario();

}
