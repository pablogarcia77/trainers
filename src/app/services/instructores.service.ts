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
export class InstructoresService {

  // URL Base
  private urlBase = environment.url_servicios_base;

  // Variables de URL API REST
  private apiGetInstructores = this.urlBase + '/instructores/';
  private apiPostInstructores = this.urlBase + '/instructores/';
  private apiPutInstructores = this.urlBase + '/instructores/';
  private apiDeleteInstructores = this.urlBase + '/instructores/';

  constructor(
    public http: HttpClient
  ) { }

  getInstructores():Observable<any>{
    return this.http.get(this.apiGetInstructores);
  }

  getInstructor(id: number):Observable<any>{
    return this.http.get(this.apiGetInstructores + id);
  }

  postInstructor(instructor: any): Observable<any>{
    const newSession = Object.assign({},instructor);
    return this.http.post<any[]>(this.apiPostInstructores,newSession,cudOptions);
  }

  putInstructor(idInstructor: number,instructor: any): Observable<any>{
    const newSession = Object.assign({},instructor);
    return this.http.put<any[]>(this.apiPutInstructores + idInstructor, newSession, cudOptions);
  }

  deleteInstructor(id:number):Observable<any>{
    return this.http.delete(this.apiDeleteInstructores + id);
  }

}
