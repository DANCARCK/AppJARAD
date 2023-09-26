import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { AddEditVehiculoComponent } from './components/add-edit-vehiculo/add-edit-vehiculo.component';

const routes: Routes = [
  { path: '', component: VehiculoComponent },
  { path: 'add', component: AddEditVehiculoComponent },
  { path: 'edit/:id', component: AddEditVehiculoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
