import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VigilanteRegComponent } from './components/vigilante-reg/vigilante-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    VendedorComponent,
    VigilanteRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
