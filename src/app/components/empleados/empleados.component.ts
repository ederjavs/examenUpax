import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CorsService } from "../../core/cors.service";
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { NuevoComponent } from "../nuevo/nuevo.component";

import {
  MatDialog
} from '@angular/material/dialog';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'last_name', 'birthday'];

  dataSource: MatTableDataSource<any[]> =[];
  
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private cors: CorsService) {
    this.cors.get('employees/eder_avendano').subscribe((info: any) => {
      this.dataSource = new MatTableDataSource(info.data.employees);
       this.resultsLength = info.data.employees.length;
    });
  }

  ngOnInit(): void {

    
  }
  nuevo(){
    console.log('nuevo');
    
    const dialogRef = this.dialog.open(NuevoComponent, {
      width: '500px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result) {

        this.cors.get('employees/eder_avendano').subscribe((info: any) => {
          this.dataSource = new MatTableDataSource(info.data.employees);
          this.resultsLength = info.data.employees.length;
        });

      } 
      
    });
  
  }
  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
