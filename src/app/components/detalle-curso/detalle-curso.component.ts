import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { InscripcionComponent } from '../inscripcion/inscripcion.component';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  public curso!: any;
  private id!: number;
  public comisiones!: Array<any>;

  constructor(
    private router: ActivatedRoute,
    private cursosService: CursosService,
    public dialog: MatDialog
  ) {
    this.comisiones = new Array<any>();
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        this.id = params.id

        this.cursosService.getDetalleCurso(this.id).subscribe(
          response => {
            // console.log(response.cursos[0])
            this.curso = response.cursos[0];
            this.comisiones = response.cursos[0].comisiones;
          }
        )
      }
    )
  }

  inscribir(){
    this.dialog.open(
      InscripcionComponent,
      {
        data: {
          comisiones: this.comisiones,
          curso: this.curso,
        }
      }
      
    )
  }

}
