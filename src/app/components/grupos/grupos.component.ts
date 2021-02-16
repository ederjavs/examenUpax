import { Component, OnInit } from '@angular/core';
import { CorsService } from '../../core/cors.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';




interface empleado {
  checked: boolean;
  group_id: number;
  id: number;
  name: string;
}

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  grupos: any[] = [];
  globalCheck: boolean = true;
  gruposArr = [];
  empleados: empleado[] = [];
  nobreGrupo: string = '';
  constructor(private _snackBar: MatSnackBar,private cors: CorsService) {
    this.cors.get('groups/eder_avendano').subscribe((info: any) => {
      this.grupos = info.data.groups;
      this.gruposArr = info.data.groups;
    });
  }

  ngOnInit(): void {}

  selectAll(event: any) {
    this.empleados.forEach((element: any) => {
      if (event.checked) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  }
  valueChange(event: any, indice: number) {
    if (event.checked) {
      this.empleados[indice].checked = true;
    } else {
      this.empleados[indice].checked = false;
    }
  }
  showLog() {
    this.empleados.forEach((element: any) => {
      if (element.checked) {
        console.log(element.name);
      }
    });
  }
  eliminar() {
    this.globalCheck = true;
    this.empleados = [];
    this.nobreGrupo = '';
  }
  drop(event: CdkDragDrop<string[]>) {
    this.nobreGrupo = this.grupos[event.previousIndex].name;

    this.cors
      .get(
        `employees/eder_avendano/getByGroup?id=${
          this.grupos[event.previousIndex].id
        }`
      )

      .subscribe(
        (empleados: any) => {
          this.globalCheck = true;

          this.empleados = empleados.data.employees.map((item: empleado) => {
            return {
              checked: true,
              group_id: item.group_id,
              id: item.id,
              name: item.name
            };
          });
        },
        error => {
          console.log(error);
         this._snackBar.open('Error con el servidor','Ok')
        }
      );
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (filterValue.trim() == '') {
      this.grupos = this.gruposArr;
    } else {
      this.grupos = Object.assign([], this.grupos).filter((item: any) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }
}
