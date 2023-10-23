import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  loading: boolean = false;
  form: FormGroup;
  id: number; 
  
  constructor(
    private fb: FormBuilder,
    private _clienteService: ClienteService,
    private router: Router,
    private aRouter: ActivatedRoute){
   
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  addCliente(){
    const clients: Cliente = {
      nombre: this.form.value.nombre,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono
    }

    this.loading = true;

    if(this.id == 0){
      this._clienteService.saveCliente(clients).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/factura']);
      })
      this.form.reset();
    }
  }

  ngOnInit(): void {   
    
  }

  getCliente(id: number){
    this.loading = true;
    this._clienteService.getCliente(id).subscribe((data:Cliente) => {
      console.log(data);
      this.loading = false;
      this.form.setValue({
        nombre: data.nombre,
        direccion: data.direccion,
        telefono: data.telefono
      })
    })
  }
}
