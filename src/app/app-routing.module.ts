import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../app/components/home/home.component";
import { EmpleadosComponent } from "../app/components/empleados/empleados.component";
import { GruposComponent } from "../app/components/grupos/grupos.component";
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grupos',
    component: GruposComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
