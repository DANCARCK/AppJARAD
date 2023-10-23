import { Component, OnInit } from '@angular/core';
import { Opcion } from 'src/app/interfaces/opcion';
import { OpcionService } from 'src/app/services/opcion.service';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css']
})

export class OpcionComponent implements OnInit {
  loading: boolean = false;
  opcion: Opcion[] = [];

  constructor(private _opcionservice: OpcionService){}

  ngOnInit(): void {
    this.getListOpciones();
  }

  getListOpciones(){
    this.loading = true;
    this._opcionservice.getListOpciones().subscribe((data: Opcion[]) => {
      this.opcion = data;
      this.loading = false;
    })
  }

  deleteOpcion( id: number ) {
    this.loading = true;
    this._opcionservice.deleteOpcion(id).subscribe(() => {
      this.getListOpciones();
    })
  }

}
