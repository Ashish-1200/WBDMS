import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewIRService } from '../viewinsurereports/viewireport.service';  
import { UpdateIreportService } from './updateir.service';

@Component({
  selector: 'app-updateinsurereports',
  templateUrl: './updateinsurereports.component.html',
  styleUrls: ['./updateinsurereports.component.css']
})
export class UpdateinsurereportsComponent implements OnInit {

  form!: FormGroup;
  message = false;
  FRdata: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdateIreportService,
    private viewservice:  ViewIRService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.viewservice.viewIreport(id).subscribe((result: any) => {
      console.log(result);
      this.FRdata = result;
      this.initForm(result);
    });
  }

  private initForm(data: any): void {
    this.form = new FormGroup({
      departmentName: new FormControl(data.departmentName, Validators.required),
      period: new FormControl(data.period, Validators.required),
      projectDescription: new FormControl(data.projectDescription, Validators.required),
      insuranceDate: new FormControl(data.insuranceDate, Validators.required),
    
      commentbox: new FormControl(data.commentbox, Validators.required),
    });
  }

  updateData(): void {
    const updatedData = this.form.value;
    updatedData.version = this.FRdata.version + 1;
    console.log(updatedData);
    this.updateservice.updateform(this.FRdata._id, updatedData).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Updated Successfully', '', {
        verticalPosition: 'top',
        panelClass: 'edit'
      });
    });
  }

 

}
