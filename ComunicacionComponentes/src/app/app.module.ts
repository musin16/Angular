import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHuertoComponent } from './huerto/huerto.component';
import { AppHortalizaComponent } from './hortaliza/hortaliza.component';
import { AppFrutalComponent } from './fruta/fruta.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AppHuertoComponent,
    AppHortalizaComponent,
    AppFrutalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
