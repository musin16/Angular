import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutalComponent } from './frutal/frutal.component';
import { HuertoComponent } from './huerto/huerto.component';
import { FormsModule } from '@angular/forms';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
@NgModule({
  declarations: [
    AppComponent,
    FrutalComponent,
    HuertoComponent,
    HortalizaComponent,

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
