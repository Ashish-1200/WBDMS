import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { freportservice } from './freports.service';
import { LoginService } from '../login/login.service';
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
remove = false;
role: string | undefined;

constructor(
private freportService: freportservice,
private loginService: LoginService,
private _snackBar: MatSnackBar
) {}

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngOnInit(): void {
this.getFreports();
this.loginService.updatemenu.subscribe(() => this.MenuDisplay());
this.MenuDisplay();
}

getFreports(): void {
this.freportService.getFreports().subscribe((data) => {
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

deleteFreport(financial_id: any): void {
if (!confirm('Are you sure you want to permanently delete this form?')) {
return;
}
this.freportService.deleteFreport(financial_id).subscribe(
() => {
this.getFreports();
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