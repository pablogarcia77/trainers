import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/models/format-datepicker';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { switchMap } from 'rxjs/operators';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class InscripcionComponent implements OnInit {

  public comisionFormGroup!: FormGroup;
  public personaFormGroup!: FormGroup;
  public curso!: Curso;
  public comisiones: Array<any>;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private alumnosService: AlumnosService,
    private inscripcionesService: InscripcionesService
  ) {
    this.comisiones = new Array<any>();
    this.comisiones = this.data.comisiones;
    this.curso = this.data.curso;
    this.comisionFormGroup = this._formBuilder.group({
      comision: ['',Validators.required]
    })
    this.personaFormGroup = this._formBuilder.group({
      apellidos: ['',Validators.required],
      nombres: ['',Validators.required],
      dni: ['',Validators.required],
      fecha_nacimiento: ['',Validators.required],
      celular: ['',Validators.required],
      mail: ['',[Validators.required,Validators.email]],
      direccion_calle: ['',Validators.required],
      direccion_numero: ['',Validators.required],
      direccion_barrio: ['',Validators.required],
      direccion_localidad: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.comisiones)
    console.log(this.curso)
  }

  inscribir(){
    let idComision = this.comisionFormGroup.get('comision').value.idComision;
    let alumno = this.comisionFormGroup.get('comision').value
    console.log(this.comisionFormGroup.get('comision').value)
    console.log(this.personaFormGroup.value)
    this.alumnosService.postAlumno(alumno).subscribe(
      response => {
        let inscripcion = {
          id_comisiones: idComision,
          id_alumnos: response.id
        }
        console.log('JSON: ',inscripcion)
        this.inscripcionesService.postInscripcion(inscripcion).subscribe(
          res => {
            console.log(res)
          }
        )
      }
    )
  }

}
