import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit{
  loading: boolean = false;
  cliente: Cliente[]= []

  constructor(private _clienteService: ClienteService){}

  ngOnInit(): void {
    this.getListClientes();
  }

  getListClientes(){
    this.loading = false;
    this._clienteService.getListClientes().subscribe((data) => {
      this.cliente = data;
      this.loading = false;
    })
  }

}
