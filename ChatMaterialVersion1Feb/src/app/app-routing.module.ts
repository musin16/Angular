import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { GestionComponent } from './gestion/gestion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chat/:', component: ChatComponent },
  { path: 'gestion',component:GestionComponent},
  { path: 'gestion/:',component:GestionComponent},
  { path: 'usuarios',component:UsuariosComponent},
  { path: 'usuarios/:',component:UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
