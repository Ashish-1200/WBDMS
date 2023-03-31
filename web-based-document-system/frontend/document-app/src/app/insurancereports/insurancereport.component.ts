import { Component, OnInit } from '@angular/core';
import { insurereportservice } from './insurancereports.service';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { insurance } from './insurancereports.model';
@Component({
  selector: 'app-insurancereports',
  templateUrl: './insurancereports.component.html',
  styleUrls: ['./insurancereports.component.css']
})
export class InsurancereportComponent implements OnInit {
  displayedColumns: string[] = [
    
    '_id',
    'departmentName',
    'period',
    'projectDescription',
    'dateuploaded',
    'Options'

    ];
    dataSource = new MatTableDataSource<insurance>();
    remove = false;
    role: string | undefined;
    
    constructor(
    private IRService: insurereportservice,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
    ) {}
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    ngOnInit(): void {
    this.getInsuranceReports();
    this.loginService.updatemenu.subscribe(() => this.MenuDisplay());
    this.MenuDisplay();
    }
    
    getInsuranceReports(): void {
    this.IRService.getInsuranceReports().subscribe((data) => {
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
    
    MenuDisplay(): void {
    if (this.loginService.getToken()) {
    this.role = this.loginService.GetRolebyToken(this.loginService.getToken());
    console.log('role:', this.role);
    this.remove = this.role === 'Administrator';
    }
    }
    
    deleteInsuranceReport(insurance_id: any): void {
    if (!confirm('Are you sure you want to permanently delete this form?')) {
    return;
    }
    this.IRService.deleteInsuranceReport(insurance_id).subscribe(
    () => {
    this.getInsuranceReports();
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
    