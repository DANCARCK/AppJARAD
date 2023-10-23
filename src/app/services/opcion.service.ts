import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opcion } from '../interfaces/opcion';

@Injectable({
  providedIn: 'root'
})
export class OpcionService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/opciones/'
  }

  getListOpciones(): Observable<Opcion[]>{
    return this.http.get<Opcion[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteOpcion(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveOpcion(opcion: Opcion): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, opcion);
  }

  getOpcion(id: number): Observable<Opcion>{
    return this.http.get<Opcion>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateOpcion(id: number, opcion: Opcion): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, opcion);
  }

}
