import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'


//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { AddEditVehiculoComponent } from './components/add-edit-vehiculo/add-edit-vehiculo.component';
import { LoginComponent } from './components/login/login.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { FacturaComponent } from './components/factura/factura.component';
import { OpcionComponent } from './components/opcion/opcion.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VehiculoInterComponent } from './components/vehiculo-inter/vehiculo-inter.component';
import { AddEditOpcionComponent } from './components/add-edit-opcion/add-edit-opcion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehiculoComponent,
    AddEditVehiculoComponent,
    LoginComponent,
    ProgressBarComponent,
    FacturaComponent,
    OpcionComponent,
    ClienteComponent,
    VehiculoInterComponent,
    AddEditOpcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
