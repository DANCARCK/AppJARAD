import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VigilanteRegComponent } from './components/vigilante-reg/vigilante-reg.component';

const routes: Routes = [
  { path: '', redirectTo: 'vendedor', pathMatch: 'full' },
  { path: 'app', component: AppComponent},
  { path: 'vendedor', component: VendedorComponent },
  { path: 'vigilante-reg', component: VigilanteRegComponent},
  { path: '**', redirectTo: 'vendedor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
