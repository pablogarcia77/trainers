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
export class CursosService {

  // URL Base
  private urlBase = environment.url_servicios_base;

  // Variables de URL API REST
  private apiGetCursos = this.urlBase + '/cursos/';
  private apiGetCursosDetalle = this.urlBase + '/detallecursos/';
  private apiPostCursos = this.urlBase + '/cursos/';
  private apiPutCursos = this.urlBase + '/cursos/';
  private apiDeleteCursos = this.urlBase + '/cursos/';

  constructor(
    public http: HttpClient
  ) { }

  getCursos():Observable<any>{
    return this.http.get(this.apiGetCursos);
  }

  getDetalleCursos():Observable<any>{
    return this.http.get(this.apiGetCursosDetalle);
  }

  getDetalleCurso(id: number):Observable<any>{
    return this.http.get(this.apiGetCursosDetalle + id);
  }

  getCurso(id: number):Observable<any>{
    return this.http.get(this.apiGetCursos + id);
  }

  postCursos(curso: any): Observable<any>{
    const newSession = Object.assign({},curso);
    return this.http.post<any[]>(this.apiPostCursos,newSession,cudOptions);
  }

  putCurso(idCurso: number,curso: any): Observable<any>{
    const newSession = Object.assign({},curso);
    return this.http.put<any[]>(this.apiPutCursos + idCurso, newSession, cudOptions);
  }

  deleteCurso(id:number):Observable<any>{
    return this.http.delete(this.apiDeleteCursos + id);
  }


}
