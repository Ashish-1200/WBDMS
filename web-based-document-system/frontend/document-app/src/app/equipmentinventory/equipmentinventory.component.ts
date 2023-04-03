
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
    remove = false;
    role: string | undefined;
    

    constructor(
      private equipinventoryservice : equipinventoryservice ,
      private loginService: LoginService,
      private _snackBar: MatSnackBar
    ) { }
  
    @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  
  

      ngOnInit(): void {
        this.getequip();
        this.loginService.updatemenu.subscribe(() => this.MenuDisplay());
        this.MenuDisplay();
        }
        
        getequip(): void {
        this.equipinventoryservice.getequip().subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        });
        }
  
    
  
    
    applyFilter(event: Event): void {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      this.dataSource.filter = filterValue;
      if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      }
      }
  
  
    MenuDisplay(){
      if(this.loginService.getToken()!='')
      this.role=this.loginService.GetRolebyToken(this.loginService.getToken());
      console.log('role:', this.role); // console log
      this.remove = this.role=='Administrator'; // allows only admin to access the delete button
  
    }
  
  
    deleteequip(equip_id: any): void {
      if (!confirm('Are you sure you want to permanently delete this form?')) {
      return;
      }
      this.equipinventoryservice.deleteequip(equip_id).subscribe(
      () => {
      this.getequip();
      this.showSnackBar('Deleted!', 'edit');
      },
      (error) => {
      console.error(error);
      this.showSnackBar('Error deleting form!', 'error');
      }
      );
      }
      
      showSnackBar(message: string, panelClass: string): void {
      this._snackBar.open(message, '', {
      verticalPosition: 'top',
      panelClass: panelClass,
      });
      }
      } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
