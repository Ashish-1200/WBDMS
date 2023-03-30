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
    'Options'];

    
    dataSource = new MatTableDataSource<financial>();
    remove = false;
    role: any;
    
  public freports: any;
  public errorMessage: string = '';

    constructor(
      private freportService: freportservice,
      private loginService: LoginService,
      private _snackBar: MatSnackBar
    ) { }
  
    @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  
  
  
  
    ngOnInit(): void {
  
      this.freportService.getFreports().subscribe((data) => {
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
      this.role=this.loginService.GetRolebyToken(this.loginService.getToken());
      console.log('role:', this.role); // console log
      this.remove = this.role=='Administrator'; // allows only admin to access the delete button
  
    }
  
  //change code
  deleteFreport(id: number) {
    if(confirm("Are you sure you want to delete this report?")) {
      this.freportService.deleteFreport(id).subscribe(
        data => this.freports = data,
        error => this.errorMessage = error
      );
    }
  }
  
}