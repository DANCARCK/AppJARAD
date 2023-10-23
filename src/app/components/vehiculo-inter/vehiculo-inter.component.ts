import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Intercambio } from 'src/app/interfaces/intercambio';
import { IntercambioService } from 'src/app/services/intercambio.service';

@Component({
  selector: 'app-vehiculo-inter',
  templateUrl: './vehiculo-inter.component.html',
  styleUrls: ['./vehiculo-inter.component.css']
})
export class VehiculoInterComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  constructor(private fb:FormBuilder,
    private _intercambioService: IntercambioService,
    private router: Router,
    private aRouter: ActivatedRoute){
      
      this.form = this.fb.group({
        tipoVehiculo: ['Usado', Validators.required],
        niv: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
        nombre: ['', Validators.required],
        modelo: ['', Validators.required],
        anio: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      })

      this.id = Number(aRouter.snapshot.paramMap.get('id'));
    }

    addIntercambio(){
      const intercambio: Intercambio = {
       tipoVehiculo: this.form.value.tipoVehiculo,
       niv: this.form.value.niv,
       nombre: this.form.value.nombre,
       modelo: this.form.value.modelo,
       anio: this.form.value.anio
      }

      this.loading = true;

      if(this.id == 0){
        this._intercambioService.saveIntercambio(intercambio).subscribe(() => {
          this.loading = false;
          this.router.navigate(['/factura']);
        })
        this.form.reset();
      }
    }

  ngOnInit(): void {}

  getIntercambio(id: number){
    this.loading = true;
    this._intercambioService.getIntercambio(id).subscribe((data: Intercambio) => {
      console.log(data);
      this.loading = false;
      this.form.patchValue({
        niv: data.niv,
        nombre: data.nombre,
        modelo: data.modelo,
        anio: data.anio,
      })
    })
  }
}