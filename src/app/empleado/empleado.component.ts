import { Component, ViewChild } from '@angular/core';
import { Empleado } from '../empleado';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServiceEmpleadoService } from '../service-empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar'];
  datos:Empleado[]=[];
  @ViewChild(MatTable) tabla1:MatTable<Empleado> | undefined;
  ds=new MatTableDataSource<Empleado>();
  constructor(private servicehTTP: ServiceEmpleadoService) {
  this.servicehTTP.leerEmpleados().subscribe((x) => {
    this.ds.data = x;
  });
}

}
