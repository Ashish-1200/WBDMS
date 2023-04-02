
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewformService } from '../viewform/viewform.service'; 
import { UpdateformService } from './updateform.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit{
  form!: FormGroup;
  message: boolean = false;
  incidentData: any;




  constructor(private activatedroute:ActivatedRoute, private updateservice:UpdateformService, private viewservice:ViewformService , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    //versionNumber: new FormControl(1),
    //lastEditedBy: new FormControl('',Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    dateOfIncident: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
   commentbox: new FormControl('', Validators.required),
   
  });


  ;


    this.viewservice.viewincidentForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.incidentData = result;

      this.form.patchValue({
        firstName: result [' firstName'],
        lastName: result['lastName'],
        gender:result['gender'],
        age:result['age'],
        address: result['address'],
        dateOfIncident: result['dateOfIncident'],
        location:result['location'],
        description:result['description'],
        commentbox:result['commentbox'],
        //lastEditedBy: new FormControl('current user', Validators.required),
        //versionNumber: new FormControl(1),
        
       
      });

      

    });
  }





  UpdateData() {

    const updatedData = this.form.value;
    updatedData.version = this.incidentData.version + 1;

    console.log(this.form.value);
    this.updateservice.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Updated Successfully','',{
        verticalPosition:'top',
    
        panelClass:'edit'
      })

    })



  
  }
   }
