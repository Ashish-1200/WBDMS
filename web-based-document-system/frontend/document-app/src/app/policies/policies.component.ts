import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { policyservice } from './policy.service';
import { LoginService } from '../login/login.service';
import { policy } from './policy.model';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit{
  displayedColumns: string[] = [
    '_id',
    'departmentName',
    'Purpose',
    'Terms',
    'Scope',
    'Options'
    ];
    
    dataSource = new MatTableDataSource<policy>();
    remove = false;
    role: string | undefined;
    
    constructor(
    private policyService: policyservice,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
    ) {}
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    ngOnInit(): void {
    this.getpolicyreports();
    this.loginService.updatemenu.subscribe(() => this.MenuDisplay());
    this.MenuDisplay();
    }
    
    getpolicyreports(): void {
    this.policyService.getpolicyreports().subscribe((data) => {
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
    
    deletepolicyreport(policy_id: any): void {
    if (!confirm('Are you sure you want to permanently delete this form?')) {
    return;
    }
    this.policyService.deletepolicyreport(policy_id).subscribe(
    () => {
    this.getpolicyreports();
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
