
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
  constructor(private activatedroute:ActivatedRoute, private updateservice:UpdateformService, private viewservice:ViewformService , private _snackBar: MatSnackBar) { }

  form = new FormGroup({
    
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
  message:boolean = false;
  ngOnInit(): void {

    this.viewservice.viewincidentForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.form = new FormGroup({
        firstName: new FormControl(result [' firstName'],Validators.required),
        lastName: new FormControl(result['lastName'],Validators.required),
        gender:new FormControl(result['gender'],Validators.required),
        age:new FormControl(result['age'],Validators.required),
        address: new FormControl(result['address']),
        dateOfIncident: new FormControl(result['dateOfIncident'],Validators.required),
        location:new FormControl(result['location'],Validators.required),
        description:new FormControl(result['description'],Validators.required),
        commentbox:new FormControl(result['commentbox'],Validators.required)
      });

    });
  }





  UpdateData() {

    console.log(this.form.value);
    this.updateservice.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
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
