import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class Chat2Service {
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
    mensaje.fecha=formatDate(fecha,"HH:mm:ss/dd--mm-yyyy",this.locale);
    return this.httpClient.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje);
  }
}
