import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibidosComponent } from './recibidos/recibidos.component';

const routes: Routes = [
  { path: 'recibidos', component:RecibidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
