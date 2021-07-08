import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscripcionesService } from 'src/app/services/inscripciones.service';

@Component({
  selector: 'app-pago-aprobado',
  templateUrl: './pago-aprobado.component.html',
  styleUrls: ['./pago-aprobado.component.css']
})
export class PagoAprobadoComponent implements OnInit {

  public url: any
  public estado: string;
  public id_pago: string;

  constructor(
    private router: Router,
    private inscripcionesService: InscripcionesService
  ) { }

  ngOnInit(): void {
    this.url = this.router.parseUrl(this.router.url)
    this.estado = this.url.queryParams['status']
    this.id_pago = this.url.queryParams['preference_id']
    let payd = {
      "preference_id": this.id_pago
    }
    console.log(payd)
    this.inscripcionesService.putPago(payd).subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
