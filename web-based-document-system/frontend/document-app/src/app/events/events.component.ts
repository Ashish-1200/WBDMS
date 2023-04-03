import { Component, OnInit } from '@angular/core';
import { eventservice } from './events.service';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { eventm } from './events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  implements OnInit {

  displayedColumns: string[] = [
    
    '_id',
    'department',
    'eventName',
    'eventDes',
    'eventDate',
    
    'dateuploaded',
    'Options'
    ];
    
    dataSource = new MatTableDataSource<eventm>();
    remove = false;
    role: string | undefined;

    constructor(
      private eventService: eventservice,
      private loginService: LoginService,
      private _snackBar: MatSnackBar
    ) { }
  
    @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  

    ngOnInit(): void {
      this.getevent();
      this.loginService.updatemenu.subscribe(() => this.MenuDisplay());
      this.MenuDisplay();
      }
      
      getevent(): void {
      this.eventService.getevent().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
      console.log('currentRole:', this.role); // console log
      this.remove = this.role=='Administrator'; // allows only admin to access the delete button
  
    }

    
        deleteevent(incident_id: any): void {
          if (!confirm('Are you sure you want to permanently delete this form?')) {
          return;
          }
          this.eventService.deleteevent(incident_id).subscribe(
          () => {
          this.getevent();
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