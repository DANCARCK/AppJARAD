import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculos } from 'src/app/interfaces/vehiculos';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-add-edit-vehiculo',
  templateUrl: './add-edit-vehiculo.component.html',
  styleUrls: ['./add-edit-vehiculo.component.css']
})
export class AddEditVehiculoComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, 
    private _vehiculoService: VehiculoService,
    private router: Router,
    private aRouter: ActivatedRoute ){
    
    this.form = this.fb.group({
      tipoVehiculo: ['Nuevo', Validators.required],
      niv: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      nombre: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [null, Validators.required],
      fabricante: ['', Validators.required],
      costoBase: [null, Validators.required]
    })

    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(aRouter.snapshot.paramMap.get('id'))
  }

  addVehicle(){
    const vehicle: Vehiculos = {
       tipoVehiculo: this.form.value.tipoVehiculo,
       niv: this.form.value.niv,
       nombre: this.form.value.nombre,
       modelo: this.form.value.modelo,
       anio: this.form.value.anio,
       fabricante: this.form.value.fabricante,
       costoBase: this.form.value.costoBase
    }

    this.loading = true;

    if(this.id !== 0){
      //Es editar
      vehicle.id = this.id;
      this._vehiculoService.updateVehiculo(this.id, vehicle).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/vehiculo']);
      })
    }else{
      //Es agregar
      this._vehiculoService.saveVehiculo(vehicle).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/vehiculo']);
    })
    this.form.reset();
    }


    
  }

  ngOnInit(): void{
    if(this.id != 0){
      //Editar
      this.operacion = 'Editar ';
      this.getVehiculo(this.id);
    }
  }

  getVehiculo(id: number){
    this.loading = true;
    this._vehiculoService.getVehiculo(id).subscribe((data:Vehiculos) => {
      console.log(data);
      this.loading = false;
      this.form.patchValue({
        niv: data.niv,
        nombre: data.nombre,
        modelo: data.modelo,
        anio: data.anio,
        fabricante: data.fabricante,
        costoBase: data.costoBase
      })
    })
  }

}
