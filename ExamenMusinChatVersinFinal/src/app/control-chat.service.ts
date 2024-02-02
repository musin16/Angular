import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Usuario } from './usuario';
import { Mensaje } from './mensaje';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { MensajePrivado } from './mensaje-privado';

@Injectable({
  providedIn: 'root'
})
export class ControlChatService {
  obtenerHistorialEnviados(destinatario: string):Observable<MensajePrivado[]> {
    return this.httpClient.get<MensajePrivado[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesE.php?usuario="+destinatario)
  }
  obtenerHistorialChat(name: string):Observable<MensajePrivado[]> {
    return this.httpClient.get<MensajePrivado[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario="+name)
  }
  enviarMensaje(user: MensajePrivado) {
    return this.httpClient.post<MensajePrivado>("http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php",user);
  }

  obtenerUsuario(user: Usuario) {
    return this.httpClient.get<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+user.email+'&pwd='+user.pwd)
  }
  chat:Mensaje[]=[]
 
  constructor(private httpClient:HttpClient,@Inject(LOCALE_ID) public locale: string) { }
  leerChat():Observable<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php');
  }
  insertarMensaje(mensaje:Mensaje){
    let fecha=new Date();
    mensaje.fecha=formatDate(fecha,"HH:mm:ss/dd-mm-yyyy",this.locale);
    return this.httpClient.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje);
  }
  insertarUsuario(usuario:Usuario){
    return this.httpClient.post<Usuario>("http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php",usuario)
  }
  bloquearMensaje(mensaje:Mensaje){   
    return this.httpClient.put<Mensaje>("http://moralo.atwebpages.com/chat/BloquearMensaje.php",mensaje);
  }
  activarMensaje(mensaje:Mensaje){ 
    return this.httpClient.put<Mensaje>("http://moralo.atwebpages.com/chat/ActivarMensaje.php",mensaje);
  }
  activarUsuario(usuario:Usuario){
    return this.httpClient.post<Usuario>("http://moralo.atwebpages.com/chat/ActivarUsuario.php",usuario)
  }
  boquearUsuario(usuario:Usuario){
    return  this.httpClient.post<Usuario>("http://moralo.atwebpages.com/chat/BloquearUsuario.php",usuario)
  }
  obtenerUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php");
  }
  leerChatActivo():Observable<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes2.php');
  }
  
}
