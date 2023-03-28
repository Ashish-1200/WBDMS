
import { Component, OnInit } from '@angular/core';
import {  equipinventoryservice } from './equipmentinventory.service';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { equipmodel } from './equipmentinventory.model';

@Component({
  selector: 'app-equipmentinventory',
  templateUrl: './equipmentinventory.component.html',
  styleUrls: ['./equipmentinventory.component.css'],
  providers: [equipinventoryservice ],
})
export class EquipmentinventoryComponent implements OnInit {
  displayedColumns: string[] = [
    
    '_id',
    'DepartmentName',
    'Project',
    'DateOfProject',
    'SerialNo',
    'dateuploaded',
    'Options'

    ];
    dataSource = new MatTableDataSource<equipmodel>();
    listequip: equipmodel[] = [];
    remove = false;
    currentRole: any;

    constructor(
      private equipinventoryservice : equipinventoryservice ,
      private loginService: LoginService,
      private _snackBar: MatSnackBar
    ) { }
  
    @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  
  
  
  
    ngOnInit(): void {
  
      this.equipinventoryservice .listequiprep().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  
      });
      this.loginService.updatemenu.subscribe((res) => {
        this.MenuDisplay(); 
        
      });
      
      this.MenuDisplay(); // call the MenuDisplay function here
  
    this.loginService.updatemenu.subscribe((res) => {
      this.MenuDisplay();
    });
  
    }
  
    applyFilter(eventreport: Event) {
      const filterValue = (eventreport.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
  
    MenuDisplay(){
      if(this.loginService.getToken()!='')
      this.currentRole=this.loginService.GetRolebyToken(this.loginService.getToken());
      console.log('currentRole:', this.currentRole); // console log
      this.remove = this.currentRole=='Administrator'; // allows only admin to access the delete button
  
    }
  
  //change code
      delete(incident_id: any) {
        if (confirm('Are you sure you want to permanently delete this form?')) {
        this.equipinventoryservice .deleteUserrep(incident_id).subscribe((result) => {
        console.log(result);
        this.ngOnInit();
        this._snackBar.open('Deleted!', '', {
        verticalPosition: 'top',
        panelClass: 'edit',
        });
        });
        }
        }
        }
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
