import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos!: Array<Curso>;

  constructor(
    private cursoService: CursosService,
    private instructorService: InstructoresService
  ) { }

  ngOnInit(): void {
    this.cursoService.getDetalleCursos().subscribe(
      response => {
        this.cursos = response.cursos;
        // console.log(response)
      }
    )
  }

}
