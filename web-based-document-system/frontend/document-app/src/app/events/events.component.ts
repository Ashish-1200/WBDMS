import { Component, OnInit, ViewChild} from '@angular/core';
import { eventservice } from './events.service';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { eventsm } from './events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [eventservice],
})
export class EventsComponent  implements OnInit {

  displayedColumns: string[] = [
    
    '_id',
    'department',
    'eventName',
    'eventDes',
    'eventDate',
    'Options'
    ];
    
    dataSource = new MatTableDataSource<eventsm>();
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