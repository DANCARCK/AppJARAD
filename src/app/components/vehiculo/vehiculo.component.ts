import { Component, OnInit } from '@angular/core';
import { Vehiculos } from 'src/app/interfaces/vehiculos';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit{
  vehiculo: Vehiculos[] = []
  loading: boolean = false;

  constructor(private _vehiculoService: VehiculoService){}

  ngOnInit(): void {
    this.getListVehiculos();
  }

  getListVehiculos(){
    this.loading = true;
    this._vehiculoService.getListVehiculos().subscribe((data) => {
      this.vehiculo = data;
      this.loading = false;
    })
  } 

  deleteVehiculo(id: number){
    this.loading = true;
    this._vehiculoService.deleteVehiculo(id).subscribe(() => {
      this.getListVehiculos();
    })
  }

}
