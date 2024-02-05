import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  insertar(email:Email) {
    email.id=6,email.asunto="Hola camacho",email.asunto="Teneos examen de Rosa",email.leido=0,email.destinatario="mou",email.origen="hamza"
    return this.httpClie.post<Email>("http://moralo.atwebpages.com/serviciosMail/MandarMensajeMail.php",email);
  }

  constructor(private httpClie:HttpClient) {
    
  }
  obtenerMensajesRecibidos(usuario: string):Observable<Email[]>{
    return this.httpClie.get<Email[]>("http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_R.php?usuario="+usuario);
 
  }
}
