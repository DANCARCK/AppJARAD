import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor( private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/cliente/'
  }

  getListClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveCliente(cliente: Cliente): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cliente);
  }

}
