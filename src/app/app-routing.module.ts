import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { PagoAprobadoComponent } from './components/pago-aprobado/pago-aprobado.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'curso/:id', component: DetalleCursoComponent},
  { path: 'pagoaprobado', component: PagoAprobadoComponent},
  // { path: 'entrenador', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
