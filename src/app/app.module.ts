// Importar módulos necesarios de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ejemplo: FormsModule para formularios
import { HttpClientModule } from '@angular/common/http'; // Ejemplo: HttpClientModule para hacer peticiones HTTP

// Importar el componente principal y otros componentes necesarios
import { AppComponent } from './app.component';

// Otros ejemplos de importaciones comunes
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmpleadoComponent } from './empleado/empleado.component';

// Decorador @NgModule para definir un módulo
@NgModule({
  // Declarar los componentes que forman parte de este módulo
  declarations: [
    AppComponent,
    EmpleadoComponent
  ],
  // Importar módulos externos necesarios para este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  // Proveer servicios que estarán disponibles en toda la aplicación
  providers: [],
  // Componente principal que se iniciará cuando se cargue la aplicación
  bootstrap: [AppComponent]
})
// Clase que representa el módulo principal de la aplicación
export class AppModule { }
