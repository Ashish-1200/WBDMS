import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { incidentreportservice } from './incidentreport.service';
import { LoginService } from '../login/login.service';
import { incident } from './incidentreport.model';

@Component({
  selector: 'app-incidentreports',
  templateUrl: './incidentreports.component.html',
  styleUrls: ['./incidentreports.component.css'],
  providers: [incidentreportservice],
})
export class IncidentreportsComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'dateOfIncident',
    'lastName',
    'description',
    'department',
    'dateuploaded',
    'Options'
  ];
  dataSource = new MatTableDataSource<incident>();
  remove = false;
  role: string | undefined;

  constructor(
    private incidentreportService: incidentreportservice,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getIncidentReports();
    this.loginService.updatemenu.subscribe(() => this.MenuDisplay());
    this.MenuDisplay();
  }

  getIncidentReports(): void {
    this.incidentreportService.getIncidents().subscribe((data) => {
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

  delete(incident_id: any): void {
    if (!confirm('Are you sure you want to permanently delete this form?')) {
      return;
    }
    this.incidentreportService.deleteIncidents(incident_id).subscribe(
      () => {
        this.getIncidentReports();
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
