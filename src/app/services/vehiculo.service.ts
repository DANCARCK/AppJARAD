import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculos } from '../interfaces/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/vehiculos/'
  }

  getListVehiculos(): Observable<Vehiculos[]>{
    return this.http.get<Vehiculos[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteVehiculo(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveVehiculo(vehiculos: Vehiculos): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, vehiculos)
  }

  getVehiculo(id: number): Observable<Vehiculos>{
    return this.http.get<Vehiculos>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateVehiculo(id: number, vehiculo: Vehiculos): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, vehiculo)
  }

}
