import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { AddEditVehiculoComponent } from './components/add-edit-vehiculo/add-edit-vehiculo.component';
import { LoginComponent } from './components/login/login.component';
import { FacturaComponent } from './components/factura/factura.component';
import { OpcionComponent } from './components/opcion/opcion.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VehiculoInterComponent } from './components/vehiculo-inter/vehiculo-inter.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},  
  { path: 'login', component: LoginComponent },
  { path: 'vehiculo', component: VehiculoComponent },
  { path: 'add', component: AddEditVehiculoComponent },
  { path: 'edit/:id', component: AddEditVehiculoComponent },
  { path: 'opcion', component: OpcionComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'vehiculointer', component: VehiculoInterComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
