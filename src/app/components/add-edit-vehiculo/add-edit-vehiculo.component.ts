import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehiculos } from 'src/app/interfaces/vehiculos';

@Component({
  selector: 'app-add-edit-vehiculo',
  templateUrl: './add-edit-vehiculo.component.html',
  styleUrls: ['./add-edit-vehiculo.component.css']
})
export class AddEditVehiculoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [null, Validators.required],
      fabricante: ['', Validators.required],
      costoBase: [null, Validators.required]
    })
  }

  addVehicle(){
    const vehicle: Vehiculos = {
       nombre: this.form.value.nombre,
       modelo: this.form.value.modelo,
       anio: this.form.value.anio,
       fabricante: this.form.value.fabricante,
       costoBase: this.form.value.costoBase
    }
    console.log(vehicle);
    this.form.reset();
  }

}
