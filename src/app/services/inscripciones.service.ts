import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Encabezados HTTP
const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const cudOptionsXWWForm = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
};
const cudOptionsHtml = {
  headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  // URL Base
  private urlBase = environment.url_servicios_base;

  // Variables de URL API REST
  private apiGetInscripciones = this.urlBase + '/inscripciones/';
  private apiPostInscripciones = this.urlBase + '/inscripciones/';
  private apiPostMercadoPago = this.urlBase + '/mercadopago/';
  private apiPutInscripciones = this.urlBase + '/inscripcion/pago/';
  private apiDeleteInscripciones = this.urlBase + '/inscripciones/';

  constructor(
    public http: HttpClient
  ) { }

  getInscripciones():Observable<any>{
    return this.http.get(this.apiGetInscripciones);
  }

  postInscripcion(inscripcion: any): Observable<any>{
    const newSession = Object.assign({},inscripcion);
    return this.http.post<any[]>(this.apiPostInscripciones,newSession,cudOptions);
  }

  postMercadoPago(curso: any):Observable<any>{
    const newSession = Object.assign({},curso);
    return this.http.post<any[]>(this.apiPostMercadoPago,newSession,cudOptions);
  }

  putPago(pago: any):Observable<any>{
    const newSession = Object.assign({},pago);
    return this.http.put<any[]>(this.apiPutInscripciones + pago.preference_id, newSession, cudOptions);
  }
}
