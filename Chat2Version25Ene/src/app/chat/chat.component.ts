import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { Chat2Service } from '../chat2.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
leerMensajes() {
  this.listar();
}
insertarMensaje() {
  this.chat.usuario="Musin"
  this.chatService.insertarMensaje(this.chat).subscribe();
  this.listar();
}
chat: Mensaje=new Mensaje();
listaMensajes:Mensaje[] = [];
constructor(private chatService:Chat2Service){
  this.listar();
}
listar(){
  this.chatService.leerChat().subscribe(x=>this.listaMensajes=x);
}
}
