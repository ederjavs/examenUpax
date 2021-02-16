import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CustomMaterialModule } from "../app/shared/custom-material.module";
import { SliderModule } from 'angular-image-slider';
import { GruposComponent } from './components/grupos/grupos.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HttpClientModule,  } from '@angular/common/http';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GruposComponent,
    EmpleadosComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    SliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  entryComponents: [NuevoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
