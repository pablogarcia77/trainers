import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'curso/:id', component: DetalleCursoComponent},
  { path: '**', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
