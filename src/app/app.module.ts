import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagoAprobadoComponent } from './components/pago-aprobado/pago-aprobado.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DetalleCursoComponent,
    MenuComponent,
    SliderComponent,
    InscripcionComponent,
    PagoAprobadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
