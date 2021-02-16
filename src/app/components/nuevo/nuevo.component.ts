import { Component, Inject, OnInit } from '@angular/core';
import {
 
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { CorsService } from '../../core/cors.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  nuevoEmpleado: FormGroup;
  constructor(
    private _snackBar: MatSnackBar,
    private cors: CorsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NuevoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nuevoEmpleado = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      last_name: ['', [Validators.required, Validators.maxLength(30)]],
      birthday: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }
  fechaChange(event:any){
console.log(event);

let fecha = moment(event.value).format('MM/DD/YYYY');

let fechaFormat = moment(event.value).format('YYYY/MM/DD');
this.nuevoEmpleado.controls['birthday'].setValue(fechaFormat);

  }

  guardar(){
   if (this.nuevoEmpleado.valid) {
     console.log();
     this.cors.post('employees/eder_avendano', this.nuevoEmpleado.value).subscribe((respuesta:any)=>{
       console.log(respuesta);

       if (respuesta.success == true) {

          this.dialogRef.close(true);

          this._snackBar.open('Datos Guardados', 'Ok');

       } else {
          this._snackBar.open('Error al guardar', 'Ok');
       }
       
     });
   } else {
     this._snackBar.open('Formulario Invalido','Ok')
   }
    
  }
  ngOnInit(): void {}
}
