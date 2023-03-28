import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewformeventService } from '../viewformevent/viewformevent.service'; 
import { UpdateformeventService } from '../updateformevent/updateformevent.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateformevent',
  templateUrl: './updateformevent.component.html',
  styleUrls: ['./updateformevent.component.css']
})
export class UpdateformeventComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute, private updateeventservice:UpdateformeventService, private vieweventservice:ViewformeventService , private _snackBar: MatSnackBar) { }

  form = new FormGroup({
    //versionNumber: new FormControl(1),
    //lastEditedBy: new FormControl('',Validators.required),
    eventName: new FormControl('', Validators.required),
    eventDes: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
    commentbox: new FormControl('', Validators.required),
   
   

  });
  message:boolean = false;

  eventData: any;

  ngOnInit(): void {

    this.vieweventservice.vieweventForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.eventData = result;

      this.form = new FormGroup({
        eventName: new FormControl(result [' eventName'],Validators.required),
        eventDes: new FormControl(result['eventDes'],Validators.required),
        eventDate:new FormControl(result['eventDate'],Validators.required),
        
        commentbox:new FormControl(result['commentbox'],Validators.required),
        //lastEditedBy: new FormControl('current user', Validators.required),
        //versionNumber: new FormControl(1),
        
       
      });

      

    });
  }





  UpdateData() {

    const updatedData = this.form.value;
    updatedData.version = this.eventData.version + 1;

    console.log(this.form.value);
    this.updateeventservice.updateformevent(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Updated Successfully','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })

    })



  
  }
  removeMessage() {

  }

}
