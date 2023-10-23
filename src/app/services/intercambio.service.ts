import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Intercambio } from '../interfaces/intercambio';

@Injectable({
  providedIn: 'root'
})
export class IntercambioService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/intercambio/'
  }

  getListIntercambios(): Observable<Intercambio[]>{
    return this.http.get<Intercambio[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  saveIntercambio(intercambio: Intercambio): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, intercambio)
  }

  getIntercambio(id: number): Observable<Intercambio>{
    return this.http.get<Intercambio>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

}
