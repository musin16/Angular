import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpleadoService {

  constructor(private httpCliente:HttpClient) {
  
  }
  leerEmpleados():Observable<Empleado[]>{
    return this.httpCliente.get<Empleado[]>("http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php");
  }
}
