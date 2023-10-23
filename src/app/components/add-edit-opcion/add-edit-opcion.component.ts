import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Opcion } from 'src/app/interfaces/opcion';
import { OpcionService } from 'src/app/services/opcion.service';

@Component({
  selector: 'app-add-edit-opcion',
  templateUrl: './add-edit-opcion.component.html',
  styleUrls: ['./add-edit-opcion.component.css']
})
export class AddEditOpcionComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar';

  constructor(private fbo:FormBuilder, 
    private _opcionService: OpcionService, 
    private router: Router, 
    private aRouter: ActivatedRoute){
    
    this.form = this.fbo.group({
      codigo: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      descripcion: ['', Validators.required],
      precio: [null, Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  addOpcion(){
    const opcions: Opcion = {
      codigo: this.form.value.codigo,
      descripcion: this.form.value.descripcion,
      precio: this.form.value.precio
    }

    this.loading = true;

    if(this.id != 0){
      //Es editar
      opcions.id = this.id;
      this._opcionService.updateOpcion(this.id, opcions).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/opcion']);
      })
    }else{
      //Es agregar
      this._opcionService.saveOpcion(opcions).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/opcion']);
      })
      this.form.reset();
    } 
  }

  ngOnInit(): void{
      if( this.id != 0 ){
        this.operacion = 'Editar';
        this.getOpcion(this.id);
      }
    }

    getOpcion(id: number){
      this.loading = true;
      this._opcionService.getOpcion(id).subscribe((data:Opcion) => {
        console.log(data);
        this.loading = false;
        this.form.setValue({
          codigo: data.codigo,
          descripcion: data.descripcion,
          precio: data.precio
        })
      })
    }
}
