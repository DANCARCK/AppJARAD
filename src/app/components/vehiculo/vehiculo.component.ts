import { Component, OnInit } from '@angular/core';
import { Vehiculos } from 'src/app/interfaces/vehiculos';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {
  vehiculo: Vehiculos[] = [
    { id:1, nombre: 'Ford Mustang', modelo: 'GT', anio: 2022, fabricante: 'Ford', costoBase:45000},
    { id:2, nombre: 'Honda Civic', modelo: 'LX', anio: 2023, fabricante: 'Honda', costoBase:21500}
  ]

}
