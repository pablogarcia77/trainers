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
export class AlumnosService {

  // URL Base
  private urlBase = environment.url_servicios_base;

  // Variables de URL API REST
  private apiGetAlumnos = this.urlBase + '/alumnos/';
  private apiPostAlumnos = this.urlBase + '/alumnos/';
  private apiPutAlumnos = this.urlBase + '/alumnos/';
  private apiDeleteAlumnos = this.urlBase + '/alumnos/';

  constructor(
    public http: HttpClient
  ) { }

  getAlumnos():Observable<any>{
    return this.http.get(this.apiGetAlumnos);
  }

  postAlumno(alumno: any): Observable<any>{
    console.log(alumno)
    const newSession = Object.assign({},alumno);
    return this.http.post<any[]>(this.apiPostAlumnos,newSession,cudOptions);
  }
}
