import { Component, OnInit } from '@angular/core';
import { freportservice } from './freports.service';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { financial } from './freports.model';

@Component({
  selector: 'app-freports',
  templateUrl: './freports.component.html',
  styleUrls: ['./freports.component.css'],
  providers: [freportservice],
})
export class FreportsComponent implements OnInit {
  displayedColumns: string[] = [
    
    '_id',
    'departmentName',
    'totalIncome',
    'totalExpenditure',
    'dateuploaded',
    'Options'

    ];
    dataSource = new MatTableDataSource<financial>();
    listIncidents: financial[] = [];
    remove = false;
    currentRole: any;
    constructor(
      private freportService: freportservice,
      private loginService: LoginService,
      private _snackBar: MatSnackBar
    ) { }
  
    @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  
  
  
  
    ngOnInit(): void {
  
      this.freportService.listfinancialrep().subscribe((data) => {
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
      delete(financial_id: any) {
        if (confirm('Are you sure you want to permanently delete this form?')) {
        this.freportService.deleteUserrep(financial_id).subscribe((result) => {
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
  
