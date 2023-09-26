import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { AddEditVehiculoComponent } from './components/add-edit-vehiculo/add-edit-vehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehiculoComponent,
    AddEditVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
